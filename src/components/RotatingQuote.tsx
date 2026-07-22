import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Sparkles, ChevronLeft, ChevronRight, Pause, Play, Lightbulb } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export interface QuoteItem {
    id: string;
    en: {
        quote: string;
        category: string;
        author: string;
    };
    idLang: {
        quote: string;
        category: string;
        author: string;
    };
}

export const QUOTES_DATA: QuoteItem[] = [
    {
        id: 'architecture',
        en: {
            quote: "Languages don't scale, architecture scales.",
            category: "Software Architecture",
            author: "Core Engineering Principle"
        },
        idLang: {
            quote: "Bahasa pemrograman tidak berskala, arsitektur yang berskala.",
            category: "Arsitektur Perangkat Lunak",
            author: "Prinsip Utama Rekayasa"
        }
    },
    {
        id: 'learning',
        en: {
            quote: "Learning is not about memorization, but true understanding.",
            category: "Mastery & Growth",
            author: "Al-Khwarizmi - Mathematician"
        },
        idLang: {
            quote: "Belajar bukan menghafal, tapi memahami.",
            category: "Pembelajaran & Pertumbuhan",
            author: "Al-Khwarizmi - Matematikawan"
        }
    },
    {
        id: 'thinking',
        en: {
            quote: "He who masters the art of thinking will master all things.",
            category: "Mindset & Logic",
            author: "Al-Khwarizmi - Mathematician"
        },
        idLang: {
            quote: "Siapa yang menguasai cara berpikir, akan menguasai banyak hal.",
            category: "Pola Pikir & Logika",
            author: "Al-Khwarizmi - Matematikawan"
        }
    },
    {
        id: 'simplicity',
        en: {
            quote: "Simplicity is prerequisite for reliability.",
            category: "System Design",
            author: "Edsger W. Dijkstra"
        },
        idLang: {
            quote: "Kesederhanaan adalah syarat utama keandalan.",
            category: "Desain Sistem",
            author: "Edsger W. Dijkstra"
        }
    },
    {
        id: 'problem-solving',
        en: {
            quote: "First, solve the problem. Then, write the code.",
            category: "Software Engineering",
            author: "John Johnson"
        },
        idLang: {
            quote: "Selesaikan masalahnya terlebih dahulu. Kemudian, tulis kodenya.",
            category: "Rekayasa Perangkat Lunak",
            author: "John Johnson"
        }
    }
];

interface RotatingQuoteProps {
    variant?: 'card' | 'compact';
    autoRotateInterval?: number; // in milliseconds
    className?: string;
}

export const RotatingQuote: React.FC<RotatingQuoteProps> = ({
                                                                variant = 'card',
                                                                autoRotateInterval = 6000,
                                                                className = ''
                                                            }) => {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<1 | -1>(1);

    const nextQuote = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % QUOTES_DATA.length);
    }, []);

    const prevQuote = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + QUOTES_DATA.length) % QUOTES_DATA.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextQuote();
        }, autoRotateInterval);

        return () => clearInterval(timer);
    }, [nextQuote, isPaused, autoRotateInterval]);

    const currentQuote = QUOTES_DATA[currentIndex];
    const qData = language === 'en' ? currentQuote.en : currentQuote.idLang;

    // Variants for animation
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 30 : -30,
            opacity: 0,
            filter: 'blur(4px)',
            scale: 0.98
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            transition: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -30 : 30,
            opacity: 0,
            filter: 'blur(4px)',
            scale: 0.98,
            transition: {
                duration: 0.3,
                ease: 'easeIn'
            }
        })
    };

    if (variant === 'compact') {
        return (
            <div
                className={`relative inline-flex items-center gap-3 overflow-hidden ${className}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentQuote.id + language}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                    >
                        <Quote className="w-3.5 h-3.5 text-blue-400 shrink-0 opacity-80" />
                        <span className="italic font-sans text-slate-200 font-medium">"{qData.quote}"</span>
                        <span className="text-blue-400/70 text-[10px] hidden sm:inline">&mdash; {qData.author}</span>
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div
            className={`relative p-6 sm:p-7 rounded-3xl glass-card border-l-4 border-l-blue-500 shadow-2xl overflow-hidden group hover:border-l-emerald-400 transition-all ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Subtle Animated Glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-700" />

            {/* Progress Bar Header */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
                {!isPaused && (
                    <motion.div
                        key={currentIndex}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: autoRotateInterval / 1000, ease: 'linear' }}
                        className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-blue-400"
                    />
                )}
            </div>

            {/* Decorative Quote Symbol */}
            <div className="absolute top-3 right-5 text-blue-400/10 group-hover:text-blue-400/20 transition-colors font-serif text-6xl select-none leading-none pointer-events-none">
                &ldquo;
            </div>

            {/* Main Quote Content with AnimatePresence */}
            <div className="relative z-10 min-h-[100px] flex flex-col justify-between">
                {/* Category Pill & Pause Status */}
                <div className="flex items-center justify-between mb-3">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuote.id + '-cat'}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] font-mono text-blue-300 font-medium tracking-wider uppercase"
                        >
                            <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                            {qData.category}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-1 text-slate-400 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                        {isPaused && (
                            <span className="flex items-center gap-1 text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                <Pause className="w-2.5 h-2.5" /> Paused
              </span>
                        )}
                    </div>
                </div>

                {/* Quote Text */}
                <div className="relative my-1 overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentQuote.id + language}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-2"
                        >
                            <p className="font-display font-semibold italic text-base sm:text-lg text-white tracking-wide leading-relaxed">
                                "{qData.quote}"
                            </p>
                            <p className="text-xs text-blue-300/80 font-mono uppercase tracking-wider flex items-center gap-1.5">
                                <span className="w-3 h-px bg-blue-400/60 inline-block" />
                                {qData.author}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Controls & Dots */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                    {/* Navigation Dots */}
                    <div className="flex items-center space-x-1.5">
                        {QUOTES_DATA.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    idx === currentIndex
                                        ? 'w-6 bg-gradient-to-r from-blue-400 to-emerald-400'
                                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Go to quote ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Controls: Prev / Pause-Play / Next */}
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={prevQuote}
                            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                            title="Previous Quote"
                            aria-label="Previous Quote"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                            title={isPaused ? "Resume Auto-play" : "Pause Auto-play"}
                            aria-label={isPaused ? "Resume Auto-play" : "Pause Auto-play"}
                        >
                            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                        </button>
                        <button
                            onClick={nextQuote}
                            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                            title="Next Quote"
                            aria-label="Next Quote"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
