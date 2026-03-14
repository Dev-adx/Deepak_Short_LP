import { useState, useEffect } from "react"

export interface EventConfig {
  day1Datetime: string       // "2026-03-14T20:00:00"
  day2Datetime: string       // "2026-03-15T10:00:00"
  offerEndDatetime: string   // "2026-03-13T23:59:59"
  whatsappLink: string
  paymentLink: string
  price: string
}

const DEFAULT_CONFIG: EventConfig = {
  day1Datetime: "2026-03-14T20:00:00",
  day2Datetime: "2026-03-15T10:00:00",
  offerEndDatetime: "2026-03-13T23:59:59",
  whatsappLink: "",
  paymentLink: "https://pages.razorpay.com/pl_Re1XOtC43278Yi/view",
  price: "₹99",
}

const CONFIG_URL = "https://script.google.com/macros/s/AKfycbxPYd6BHMCS9K_9wfXB09g95V0nOSlox9kdLME-76PhwWZCUeOq5InGHQYKjFmxWgum/exec"
const CACHE_KEY = "sk_event_cfg"

// ── Module-level singleton: shared across all hook instances ──────────
let moduleConfig: EventConfig | null = null
let subscribers: Array<(c: EventConfig) => void> = []
let fetchStarted = false

// Clear any stale localStorage cache so old dates never block fresh data
try { localStorage.removeItem(CACHE_KEY) } catch { /* noop */ }

const broadcast = (cfg: EventConfig) => {
  moduleConfig = cfg
  subscribers.forEach(fn => fn(cfg))
}

const startFetch = () => {
  if (fetchStarted) return
  fetchStarted = true
  // Add redirect=false to avoid Google Apps Script redirect delay
  fetch(`${CONFIG_URL}?t=${Date.now()}&redirect=false`, { 
    cache: "no-store",
    redirect: "follow"
  })
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(data => {
      if (data && typeof data === 'object') {
        const cfg: EventConfig = {
          day1Datetime:     data.day1_datetime      || DEFAULT_CONFIG.day1Datetime,
          day2Datetime:     data.day2_datetime      || DEFAULT_CONFIG.day2Datetime,
          offerEndDatetime: data.offer_end_datetime || DEFAULT_CONFIG.offerEndDatetime,
          whatsappLink:     data.whatsapp_link      || DEFAULT_CONFIG.whatsappLink,
          paymentLink:      data.payment_link       || DEFAULT_CONFIG.paymentLink,
          price:            data.price              || DEFAULT_CONFIG.price,
        }
        broadcast(cfg)
      }
    })
    .catch(() => { /* silently keep cached/default */ })
    .finally(() => { fetchStarted = false }) // allow re-fetch next time
}

// ── Initialise module config with defaults (no cache – always fetch fresh) ─
moduleConfig = DEFAULT_CONFIG

// ── Parsers ────────────────────────────────────────────────────────────
const MONTHS      = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const FULL_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const IST_OFFSET_MINUTES = 330

const parseDT = (str: string) => {
  // UTC string
  if (str.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(str)) {
    const d = new Date(str)
    if (isNaN(d.getTime())) return { year: 2026, month: 3, day: 14, hours: 20, minutes: 0 }
    const totalMins = d.getUTCHours() * 60 + d.getUTCMinutes() + IST_OFFSET_MINUTES
    const ist = new Date(d.getTime() + IST_OFFSET_MINUTES * 60 * 1000)
    return { year: ist.getUTCFullYear(), month: ist.getUTCMonth() + 1, day: ist.getUTCDate(),
             hours: (totalMins % (24 * 60) / 60) | 0, minutes: totalMins % 60 }
  }
  // Google Sheets: "3/14/2026 20:00:00"
  const gs = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})/)
  if (gs) return { year: +gs[3], month: +gs[1], day: +gs[2], hours: +gs[4], minutes: +gs[5] }
  // ISO: "2026-03-14T20:00:00"
  const m = str.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/)
  if (m) return { year: +m[1], month: +m[2], day: +m[3], hours: +m[4], minutes: +m[5] }
  return { year: 2026, month: 3, day: 14, hours: 20, minutes: 0 }
}

const getOrdinal = (d: number) => {
  if (d > 3 && d < 21) return 'th'
  return ['th','st','nd','rd'][d % 10] ?? 'th'
}

// ── Hook ───────────────────────────────────────────────────────────────
export function useEventConfig() {
  const [config, setConfig] = useState<EventConfig>(moduleConfig!)

  useEffect(() => {
    // Subscribe to future updates
    subscribers.push(setConfig)
    // If module already has fresh data, sync immediately
    if (moduleConfig && moduleConfig !== config) setConfig(moduleConfig)
    // Kick off background fetch (no-op if already running)
    startFetch()
    return () => { subscribers = subscribers.filter(fn => fn !== setConfig) }
  }, [])

  const getDateRange = () => {
    const d1 = parseDT(config.day1Datetime), d2 = parseDT(config.day2Datetime)
    const m1 = MONTHS[d1.month - 1], m2 = MONTHS[d2.month - 1]
    if (m1 === m2) return `${d1.day}${getOrdinal(d1.day)} & ${d2.day}${getOrdinal(d2.day)} ${m1} ${d2.year}`
    return `${d1.day}${getOrdinal(d1.day)} ${m1} & ${d2.day}${getOrdinal(d2.day)} ${m2} ${d2.year}`
  }

  const formatTime = () => {
    const fmt = ({ hours, minutes }: { hours: number; minutes: number }) => {
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const h = hours % 12 || 12
      const m = minutes > 0 ? `:${String(minutes).padStart(2, '0')}` : ''
      return `${h}${m} ${ampm}`
    }
    return `${fmt(parseDT(config.day1Datetime))} & ${fmt(parseDT(config.day2Datetime))} IST`
  }

  const formatOfferDate = () => {
    const d = parseDT(config.offerEndDatetime)
    return `${d.day} ${FULL_MONTHS[d.month - 1]} ${d.year}`
  }

  const toDate = (str: string) => {
    const p = parseDT(str)
    return new Date(p.year, p.month - 1, p.day, p.hours, p.minutes)
  }

  return {
    config,
    getDateRange,
    formatTime,
    formatOfferDate,
    getEventDateTime:    () => toDate(config.day1Datetime),
    getOfferEndDateTime: () => toDate(config.offerEndDatetime),
  }
}
