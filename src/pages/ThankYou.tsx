import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, Video, CheckCircle } from "lucide-react";
import { useEventConfig } from "@/hooks/useEventConfig";
import coachImg from "@/assets/coach.jpg";

/* ── Main Component ───────────────────────────────────────────────── */
const ThankYou = () => {
  const { config, getDateRange, formatTime } = useEventConfig();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Trustpilot bar */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#00B67A"/>
                <path d="M20 7l3.6 11H35l-9.3 6.8 3.6 11L20 29l-9.3 6.8 3.6-11L5 18h11.4L20 7z" fill="white"/>
              </svg>
              <span className="font-bold text-sm tracking-tight text-[#191919] dark:text-white leading-none">Trustpilot</span>
            </div>
            <div className="flex gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" fill="#00B67A"/>
                  <path d="M20 7l3.6 11H35l-9.3 6.8 3.6 11L20 29l-9.3 6.8 3.6-11L5 18h11.4L20 7z" fill="white"/>
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.7 / 5</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">· 312 reviews</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-border" />

          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span className="text-xs text-muted-foreground">
              SEBI Registered:&nbsp;<span className="font-semibold text-foreground">INH000022297</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10 md:py-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Registration Confirmed
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-4">
            You're <span className="text-gradient">In!</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto">
            Congratulations on reserving your spot for the{" "}
            <span className="text-foreground font-semibold text-orange-500">AI Workforce Masterclass</span>.
            Your transformation starts now!
          </p>
        </div>

        {/* Session Details Card */}
        <div className="mb-6 rounded-2xl bg-card border shadow-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 px-5 py-4 border-b border-orange-100 dark:border-orange-900/50">
            <p className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center justify-center gap-2">
              <Video className="w-4 h-4 text-orange-500" />
              Your Session Details
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl p-4 bg-secondary/50 border border-border text-center">
                <CalendarDays className="w-5 h-5 mx-auto mb-2 text-orange-500" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Dates</p>
                <p className="font-bold text-sm text-foreground">
                  {getDateRange()}
                </p>
              </div>
              <div className="rounded-xl p-4 bg-secondary/50 border border-border text-center">
                <Clock className="w-5 h-5 mx-auto mb-2 text-orange-500" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Time</p>
                <p className="font-bold text-sm text-foreground">
                  {formatTime()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coach Card */}
        <div className="mb-6 rounded-2xl bg-card border shadow-lg overflow-hidden">
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <img
                src={coachImg}
                alt="Siddharth Kapoor - Trading Instructor"
                className="w-20 h-20 rounded-full object-cover border-2 border-orange-500/30"
              />
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">Siddharth Kapoor</h3>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {["Trading Instructor", "5+ yrs in markets", "Deep exposure to diverse trade setups"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-6 rounded-2xl bg-card border shadow-lg overflow-hidden">
          <div className="p-5 sm:p-6 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Join the WhatsApp Group</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Get pre-session materials, live reminders, and connect with 2000+ founders before we go live!
              </p>
            </div>
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-xl hover:brightness-110 transition-all"
              style={{ background: "#25D366", color: "#fff", boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Questions? Reach out at{" "}
            <a href="mailto:support@akshatdani.com" className="text-orange-500 hover:underline font-medium">
              support@akshatdani.com
            </a>
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
