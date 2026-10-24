import React from 'react';
import { ShieldCheck, Terminal, Activity, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 space-y-4">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-600/20 rounded-full ring-4 ring-blue-600/30">
            <ShieldCheck size={64} className="text-blue-500" />
          </div>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white">
          MIAMI VICE <span className="text-blue-500">SYSTEMS</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Sistema Central de Administración, CAD y MDT para el servidor de Roleplay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
        <div className="glass-panel p-6 flex flex-col items-center space-y-3">
          <Terminal className="text-blue-400" />
          <h3 className="font-semibold">Admin Panel</h3>
          <p className="text-sm text-slate-400">Control total del bot y base de datos.</p>
        </div>
        <div className="glass-panel p-6 flex flex-col items-center space-y-3">
          <Activity className="text-red-400" />
          <h3 className="font-semibold">MDT Dispatch</h3>
          <p className="text-sm text-slate-400">Gestión de casos y reportes criminales.</p>
        </div>
        <div className="glass-panel p-6 flex flex-col items-center space-y-3">
          <Users className="text-green-400" />
          <h3 className="font-semibold">User Management</h3>
          <p className="text-sm text-slate-400">Sincronización con Discord y Supabase.</p>
        </div>
      </div>

      <a 
        href="/api/auth/signin" 
        className="btn-primary text-lg px-8 py-4 flex items-center gap-2 hover:scale-105 transition-transform"
      >
        Iniciar Sesión con Discord
      </a>
    </div>
  );
}
