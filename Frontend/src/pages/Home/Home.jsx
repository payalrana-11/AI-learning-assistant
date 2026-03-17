// import React from "react";
// import { Sparkles, ArrowRight, BrainCircuit, BookOpen, Target, Zap, ChevronRight, Github, Twitter, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Home = () => {
//     const { isAuthenticated } = useAuth();

//     return (
//         <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
//             {/* Dot Grid Background Pattern from Dashboard */}
//             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

//             {/* Navigation */}
//             <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
//                 <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//                     <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
//                         <Sparkles className="w-5 h-5 text-emerald-600" />
//                         <span className="text-slate-900">
//                             AI <span className="text-emerald-600">Learning Assistant</span>
//                         </span>
//                     </div>

//                     <div className="flex gap-4 items-center">
//                         {isAuthenticated ? (
//                             <Link to="/dashboard" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
//                                 Dashboard
//                             </Link>
//                         ) : (
//                             <>
//                                 <Link
//                                     to="/login"
//                                     className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:flex items-center"
//                                 >
//                                     Log in
//                                 </Link>
//                                 <Link
//                                     to="/register"
//                                     className="bg-slate-900 text-white hover:bg-slate-800 transition-colors px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-slate-200"
//                                 >
//                                     Start Free
//                                 </Link>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
//                 {/* Ambient Glow (Softened for Light Mode) */}
//                 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-100/50 blur-[100px] rounded-full pointer-events-none"></div>

//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm text-emerald-700 mb-8 backdrop-blur-sm relative z-10">
//                     <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" /> AI Learning Assistant is now live
//                 </div>

//                 <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative z-10 max-w-4xl text-slate-900">
//                     Learn faster. <br className="hidden md:block" />
//                     <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
//                         Understand everything.
//                     </span>
//                 </h1>

//                 <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg relative z-10 leading-relaxed">
//                     Upload your lectures, PDFs, and notes. Our AI instantly creates a personalized study plan, smart
//                     flashcards, and quizzes to guarantee you ace your exams.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto">
//                     <Link
//                         to={isAuthenticated ? "/dashboard" : "/register"}
//                         className="bg-emerald-500 hover:bg-emerald-600 transition-all text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200"
//                     >
//                         {isAuthenticated ? "Go to Dashboard" : "Start studying smarter"}
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                 </div>
//             </section>

//             {/* Bento Box Features Section */}
//             <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
//                 <div className="mb-16 text-center md:text-left">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
//                         Everything you need to <span className="text-emerald-600">excel.</span>
//                     </h2>
//                     <p className="text-slate-500">
//                         Replace scattered notes and generic study guides with one intelligent workspace.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {/* Feature 1: AI Tutor */}
//                     <div className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 blur-[80px] rounded-full group-hover:bg-emerald-100 transition-colors"></div>
//                         <BrainCircuit className="w-8 h-8 text-emerald-600 mb-6" />
//                         <h3 className="text-2xl font-bold mb-3 text-slate-900">Your personal AI Tutor</h3>
//                         <p className="text-slate-500 mb-8 max-w-md">
//                             Stuck on a complex concept? Ask Sagedesk. It reads your uploaded materials and explains
//                             things using analogies tailored to your learning style.
//                         </p>

//                         <div className="bg-slate-50 rounded-xl border border-slate-200/60 p-4 w-full max-w-lg shadow-inner">
//                             <div className="flex gap-3 mb-2">
//                                 <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
//                                     <Sparkles className="w-4 h-4 text-emerald-600" />
//                                 </div>
//                                 <div className="bg-white rounded-2xl rounded-tl-sm p-3 text-sm text-slate-700 border border-slate-200/60 shadow-sm">
//                                     Explain Action Potentials like I'm 5, using the biology notes I just uploaded.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Feature 2: Flashcards */}
//                     <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
//                         <BookOpen className="w-8 h-8 text-cyan-600 mb-6" />
//                         <h3 className="text-2xl font-bold mb-3 text-slate-900">Smart Flashcards</h3>
//                         <p className="text-slate-500 mb-8">
//                             We automatically generate spaced-repetition flashcards from your documents.
//                         </p>

//                         <div className="w-full aspect-[4/3] bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center p-6 text-center group-hover:-translate-y-2 transition-transform">
//                             <p className="text-md font-medium text-slate-600 italic">
//                                 "What is the function of the mitochondria?"
//                             </p>
//                         </div>
//                     </div>

//                     {/* Feature 3: Targeted Quizzes */}
//                     <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
//                         <Target className="w-8 h-8 text-purple-600 mb-6" />
//                         <h3 className="text-2xl font-bold mb-3 text-slate-900">Adaptive Quizzes</h3>
//                         <p className="text-slate-500">
//                             Test your knowledge before exam day. Our AI identifies your weak spots and drills them.
//                         </p>
//                     </div>

//                     {/* Feature 4: Progress Tracking */}
//                     <div className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300">
//                         <div className="flex-1">
//                             <h3 className="text-2xl font-bold mb-3 text-slate-900">Track your mastery</h3>
//                             <p className="text-slate-500">
//                                 Visualize your progress. We calculate a 'Mastery Score' based on your quiz performance
//                                 and flashcard retention.
//                             </p>
//                         </div>
//                         <div className="w-40 h-40 shrink-0 relative flex items-center justify-center">
//                             <div className="text-4xl font-bold text-emerald-600">92%</div>
//                             <svg className="absolute w-full h-full rotate-[-90deg]">
//                                 <circle
//                                     cx="80" cy="80" r="76"
//                                     fill="transparent"
//                                     stroke="#f1f5f9"
//                                     strokeWidth="10"
//                                 />
//                                 <circle
//                                     cx="80" cy="80" r="76"
//                                     fill="transparent"
//                                     stroke="#10b981"
//                                     strokeWidth="10"
//                                     strokeDasharray="477"
//                                     strokeDashoffset="38"
//                                     strokeLinecap="round"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Steps Section */}
//             <section className="py-24 border-y border-slate-200/60 bg-white/50 relative">
//                 <div className="max-w-5xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
//                         From syllabus to A+ in <span className="text-emerald-600">3 steps</span>
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-12 relative">
//                         <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[2px] bg-slate-200"></div>

//                         {[
//                             { step: "01", title: "Upload notes", desc: "Drag and drop PDFs or Notion notes." },
//                             { step: "02", title: "AI Organization", desc: "Sagedesk extracts key concepts instantly." },
//                             { step: "03", title: "Study & Conquer", desc: "Ace your exams with smart flashcards." },
//                         ].map((item, idx) => (
//                             <div key={idx} className="relative flex flex-col items-center text-center">
//                                 <div className="w-12 h-12 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 font-bold mb-6 z-10 shadow-lg shadow-emerald-100">
//                                     {item.step}
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
//                                 <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Bottom CTA */}
//             <section className="py-32 px-4 text-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-emerald-50/50"></div>
//                 <div className="max-w-3xl mx-auto relative z-10">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Ready to upgrade your GPA?</h2>
//                     <p className="text-slate-500 mb-10 text-lg">
//                         Join thousands of students who have stopped cramming and started actually learning.
//                     </p>
//                     <Link
//                         to={isAuthenticated ? "/dashboard" : "/register"}
//                         className="bg-slate-900 hover:bg-slate-800 transition-all text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto w-fit group shadow-2xl shadow-slate-300"
//                     >
//                         {isAuthenticated ? "Go to Dashboard" : "Create your free account"}
//                         <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="border-t border-slate-200 py-12 px-6 bg-white">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//                     <div className="flex items-center gap-2 font-bold text-slate-900">
//                         <Sparkles className="w-4 h-4 text-emerald-600" /> AI Learning Assistant
//                     </div>
//                     <div className="flex gap-6 text-slate-400">
//                         <Twitter className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition-colors" />
//                         <Github className="w-5 h-5 hover:text-slate-900 cursor-pointer transition-colors" />
//                     </div>
//                     <p className="text-slate-400 text-sm">© 2026 Sagedesk AI. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Home;

import React, { useState } from "react";
import { Sparkles, ArrowRight, BrainCircuit, BookOpen, Target, Zap, ChevronRight, Github, Twitter, Mail, Lock, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/authService";
import toast from "react-hot-toast";

// --- AUTH MODAL ---
const AuthModal = ({ mode: initialMode, onClose }) => {
    const [mode, setMode] = useState(initialMode); // 'login' or 'register'
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (mode === 'register' && password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        setLoading(true);
        try {
            if (mode === 'login') {
                const { token, user } = await authService.login(email, password);
                login(user, token);
                toast.success('Logged in successfully!');
                onClose();
                navigate('/dashboard');
            } else {
                await authService.register(username, email, password);
                toast.success('Registered! Please log in.');
                setMode('login');
                setUsername(''); setEmail(''); setPassword('');
            }
        } catch (err) {
            setError(err.message || (mode === 'login' ? 'Failed to login.' : 'Failed to register.'));
            toast.error(err.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = (field) =>
        `w-full h-12 pl-12 pr-4 border-2 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:bg-white focus:shadow-lg ${focusedField === field ? 'border-emerald-500 shadow-emerald-500/10' : 'border-slate-200'}`;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-2xl shadow-slate-300/50 p-10">
                {/* Close */}
                <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25 mb-5">
                        <BrainCircuit className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-1">
                        {mode === 'login' ? 'Welcome back' : 'Create an account'}
                    </h2>
                    <p className="text-slate-500 text-sm">
                        {mode === 'login' ? 'Sign in to continue your journey' : 'Start your AI-powered learning experience'}
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    {mode === 'register' && (
                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Username</label>
                            <div className="relative">
                                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${focusedField === 'username' ? 'text-emerald-500' : 'text-slate-400'}`}>
                                    <User className="h-5 w-5" strokeWidth={2} />
                                </div>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)}
                                    onFocus={() => setFocusedField('username')} onBlur={() => setFocusedField(null)}
                                    className={inputClass('username')} placeholder="yourusername" />
                            </div>
                        </div>
                    )}

                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Email</label>
                        <div className="relative">
                            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${focusedField === 'email' ? 'text-emerald-500' : 'text-slate-400'}`}>
                                <Mail className="h-5 w-5" strokeWidth={2} />
                            </div>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                                onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                                className={inputClass('email')} placeholder="you@example.com" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Password</label>
                        <div className="relative">
                            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${focusedField === 'password' ? 'text-emerald-500' : 'text-slate-400'}`}>
                                <Lock className="h-5 w-5" strokeWidth={2} />
                            </div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                                onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)}
                                className={inputClass('password')} placeholder="••••••••" />
                        </div>
                    </div>

                    {error && (
                        <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                            <p className="text-xs text-red-600 font-medium text-center">{error}</p>
                        </div>
                    )}

                    <button onClick={handleSubmit} disabled={loading}
                        className="group relative w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-600 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25 overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {loading ? (
                                <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{mode === 'login' ? 'Signing in...' : 'Creating account...'}</>
                            ) : (
                                <>{mode === 'login' ? 'Sign in' : 'Create account'}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} /></>
                            )}
                        </span>
                    </button>
                </div>

                {/* Footer toggle */}
                <div className="mt-6 pt-5 border-t border-slate-200/60">
                    <p className="text-center text-sm text-slate-600">
                        {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                        <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}
                            className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                            {mode === 'login' ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- HOME PAGE ---
const Home = () => {
    const { isAuthenticated } = useAuth();
    const [authModal, setAuthModal] = useState(null); // null | 'login' | 'register'

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
            {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} />}

            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
                <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-600">StudyMate</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        {isAuthenticated ? (
                            <Link to="/dashboard" className="text-md font-semibold text-emerald-600 hover:text-emerald-700">Dashboard</Link>
                        ) : (
                            <>
                                <button onClick={() => setAuthModal('login')}
                                    className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:flex items-center">
                                    Log in
                                </button>
                                <button onClick={() => setAuthModal('register')}
                                    className="bg-slate-900 text-white hover:bg-slate-800 transition-colors px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-slate-200">
                                    Start Free
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-100/50 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm text-emerald-700 mb-8 backdrop-blur-sm relative z-10">
                    <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" /> AI-Powered Learning, Redefined
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative z-10 max-w-4xl text-slate-900">
                    Learn faster. <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Understand everything.</span>
                </h1>

                <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg relative z-10 leading-relaxed">
                    Upload your lectures, PDFs, and notes. Our AI instantly creates a personalized study plan, smart flashcards, and quizzes to guarantee you ace your exams.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto">
                    {isAuthenticated ? (
                        <Link to="/dashboard"
                            className="bg-emerald-500 hover:bg-emerald-600 transition-all text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200">
                            Go to Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <button onClick={() => setAuthModal('register')}
                            className="bg-emerald-500 hover:bg-emerald-600 transition-all text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200">
                            Start studying smarter <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
            </section>

            {/* Bento Box Features Section */}
            <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Everything you need to <span className="text-emerald-600">excel.</span></h2>
                    <p className="text-slate-500">Replace scattered notes and generic study guides with one intelligent workspace.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 blur-[80px] rounded-full group-hover:bg-emerald-100 transition-colors"></div>
                        <BrainCircuit className="w-8 h-8 text-emerald-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Your personal AI Tutor</h3>
                        <p className="text-slate-500 mb-8 max-w-md">Stuck on a complex concept? Ask LearnMate. It reads your uploaded materials and explains things using analogies tailored to your learning style.</p>
                        <div className="bg-slate-50 rounded-xl border border-slate-200/60 p-4 w-full max-w-lg shadow-inner">
                            <div className="flex gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                    <Sparkles className="w-4 h-4 text-emerald-600" />
                                </div>
                                <div className="bg-white rounded-2xl rounded-tl-sm p-3 text-sm text-slate-700 border border-slate-200/60 shadow-sm">
                                    Explain Action Potentials like I'm 5, using the biology notes I just uploaded.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
                        <BookOpen className="w-8 h-8 text-cyan-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Smart Flashcards</h3>
                        <p className="text-slate-500 mb-8">We automatically generate spaced-repetition flashcards from your documents.</p>
                        {/* <div className="w-full aspect-[4/3] bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center p-6 text-center group-hover:-translate-y-2 transition-transform">
                            <p className="text-md font-medium text-slate-600 italic">"What is the function of the mitochondria?"</p>
                        </div> */}
                        <div className="w-full aspect-[4/3] bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-200 flex items-center justify-center p-6 text-center group-hover:-translate-y-2 transition-transform">
                           <p className="text-md font-medium text-emerald-700 italic"> "What is the function of the mitochondria?" </p>
                       </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
                        <Target className="w-8 h-8 text-purple-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Adaptive Quizzes</h3>
                        <p className="text-slate-500">Test your knowledge before exam day. Our AI identifies your weak spots and drills them.</p>
                    </div>

                    <div className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">Track your mastery</h3>
                            <p className="text-slate-500">Visualize your progress. We calculate a 'Mastery Score' based on your quiz performance and flashcard retention.</p>
                        </div>
                        <div className="w-40 h-40 shrink-0 relative flex items-center justify-center">
                            <div className="text-4xl font-bold text-emerald-600">92%</div>
                            <svg className="absolute w-full h-full rotate-[-90deg]">
                                <circle cx="80" cy="80" r="76" fill="transparent" stroke="#f1f5f9" strokeWidth="10" />
                                <circle cx="80" cy="80" r="76" fill="transparent" stroke="#10b981" strokeWidth="10" strokeDasharray="477" strokeDashoffset="38" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 border-y border-slate-200/60 bg-white/50 relative">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">From syllabus to A+ in <span className="text-emerald-600">3 steps</span></h2>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[2px] bg-slate-200"></div>
                        {[
                            { step: "01", title: "Upload notes", desc: "Drag and drop PDFs or Notion notes." },
                            { step: "02", title: "AI Organization", desc: "Sagedesk extracts key concepts instantly." },
                            { step: "03", title: "Study & Conquer", desc: "Ace your exams with smart flashcards." },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 font-bold mb-6 z-10 shadow-lg shadow-emerald-100">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-50/50"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Ready to upgrade your GPA?</h2>
                    <p className="text-slate-500 mb-10 text-lg">Join thousands of students who have stopped cramming and started actually learning.</p>
                    {isAuthenticated ? (
                        <Link to="/dashboard"
                            className="bg-slate-900 hover:bg-slate-800 transition-all text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto w-fit group shadow-2xl shadow-slate-300">
                            Go to Dashboard <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <button onClick={() => setAuthModal('register')}
                            className="bg-slate-900 hover:bg-slate-800 transition-all text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto w-fit group shadow-2xl shadow-slate-300">
                            Create your free account <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 py-8 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                        <Sparkles className="w-4 h-4 text-emerald-600" /> StudyMate.
                    </div>
                    <div className="flex gap-6 text-slate-400">
                        <Twitter className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition-colors" />
                        <Github className="w-5 h-5 hover:text-slate-900 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-slate-400 text-sm">© 2026 StudyMate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;