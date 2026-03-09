"use client"

import { useState, useEffect } from "react"

export interface EventConfig {
  day1Datetime: string       // "2026-02-28T20:00:00"
  day2Datetime: string       // "2026-03-01T10:00:00"
  offerEndDatetime: string   // "2026-03-09T23:59:59"
  whatsappLink: string
  paymentLink: string
  price: string
}

const DEFAULT_CONFIG: EventConfig = {
  day1Datetime: "2026-02-28T20:00:00",
  day2Datetime: "2026-03-01T10:00:00",
  offerEndDatetime: "2026-03-09T23:59:59",
  whatsappLink: "https://chat.whatsapp.com/FqR0pu9etvj3pR6ICm6JzQ",
  paymentLink: "https://rzp.io/rzp/vhef5ncx",
  price: "₹99",
}

const CONFIG_URL = "https://script.google.com/macros/s/AKfycbwO9BXEn_io_etppvii304GFHwa4vUtHCMgIq6sBJylLNZECuQeirWRdQiEEe-XMkBj/exec"

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const FULL_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const IST_OFFSET_MINUTES = 330 // UTC+5:30

// Extract parts and convert to IST if string is UTC (ends with Z or has offset)
const parseDT = (str: string) => {
  const isUTC = str.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(str)
  if (isUTC) {
    const d = new Date(str)
    if (isNaN(d.getTime())) return { year: 2026, month: 2, day: 28, hours: 20, minutes: 0 }
    const totalMins = d.getUTCHours() * 60 + d.getUTCMinutes() + IST_OFFSET_MINUTES
    const istDate = new Date(d.getTime() + IST_OFFSET_MINUTES * 60 * 1000)
    return {
      year:    istDate.getUTCFullYear(),
      month:   istDate.getUTCMonth() + 1,
      day:     istDate.getUTCDate(),
      hours:   totalMins % (24 * 60) / 60 | 0,
      minutes: totalMins % 60,
    }
  }
  // No timezone suffix — treat as IST string directly
  const m = str.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/)
  if (!m) return { year: 2026, month: 2, day: 28, hours: 20, minutes: 0 }
  return {
    year:    parseInt(m[1]),
    month:   parseInt(m[2]),
    day:     parseInt(m[3]),
    hours:   parseInt(m[4]),
    minutes: parseInt(m[5]),
  }
}

const getOrdinal = (d: number) => {
  if (d > 3 && d < 21) return 'th'
  switch (d % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

export function useEventConfig() {
  const [config, setConfig] = useState<EventConfig>(DEFAULT_CONFIG)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${CONFIG_URL}?t=${Date.now()}`, { cache: "no-store" })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()

        if (data && typeof data === 'object') {
          setConfig({
            day1Datetime:     data.day1_datetime      || DEFAULT_CONFIG.day1Datetime,
            day2Datetime:     data.day2_datetime      || DEFAULT_CONFIG.day2Datetime,
            offerEndDatetime: data.offer_end_datetime || DEFAULT_CONFIG.offerEndDatetime,
            whatsappLink:     data.whatsapp_link      || DEFAULT_CONFIG.whatsappLink,
            paymentLink:      data.payment_link       || DEFAULT_CONFIG.paymentLink,
            price:            data.price              || DEFAULT_CONFIG.price,
          })
        }
        setError(null)
      } catch (err) {
        console.error("Failed to fetch event config:", err)
        setError("Using default configuration")
      } finally {
        setLoading(false)
      }
    }
    fetchConfig()
  }, [])

  // "28th Feb & 1st Mar 2026"  or  "23rd & 24th Feb 2026" (same month)
  const getDateRange = () => {
    const d1 = parseDT(config.day1Datetime)
    const d2 = parseDT(config.day2Datetime)
    const m1 = MONTHS[d1.month - 1]
    const m2 = MONTHS[d2.month - 1]

    if (m1 === m2) {
      return `${d1.day}${getOrdinal(d1.day)} & ${d2.day}${getOrdinal(d2.day)} ${m1} ${d2.year}`
    }
    return `${d1.day}${getOrdinal(d1.day)} ${m1} & ${d2.day}${getOrdinal(d2.day)} ${m2} ${d2.year}`
  }

  // "8:00 PM & 10:00 AM IST"
  const formatTime = () => {
    const fmt = ({ hours, minutes }: { hours: number; minutes: number }) => {
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const h = hours % 12 || 12
      const m = minutes > 0 ? `:${String(minutes).padStart(2, '0')}` : ''
      return `${h}${m} ${ampm}`
    }
    return `${fmt(parseDT(config.day1Datetime))} & ${fmt(parseDT(config.day2Datetime))} IST`
  }

  // "9 March 2026"
  const formatOfferDate = () => {
    const d = parseDT(config.offerEndDatetime)
    return `${d.day} ${FULL_MONTHS[d.month - 1]} ${d.year}`
  }

  // Used by countdown — treat as local time (app is IST-targeted)
  const getEventDateTime = () => new Date(config.day1Datetime)
  const getOfferEndDateTime = () => new Date(config.offerEndDatetime)

  return { config, loading, error, getDateRange, formatTime, formatOfferDate, getEventDateTime, getOfferEndDateTime }
}
