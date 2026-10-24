"use client";
import React, { useState } from 'react';
import { Trash2, Send, UserX, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const [command, setCommand] = useState('');
  const [status, setStatus] = useState('');

  const executeCommand = async () => {
    setStatus('Enviando...');
    try {
      const res = await fetch('http://localhost:8000/execute', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'CHANGE_ME_IN_ENV' 
        },
        body: JSON.stringify({ command, user_id: 'admin', args: '' })
      });
      const data = await res.json();
      setStatus(data.success ? '✅ Comando ejecutado' : '❌ Error');
    } catch (e) {
      setStatus('❌ Error de conexión');
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <div className="flex gap-2">
          <button className="btn-primary flex items-center gap-2"><Settings size={18}/> Configuración</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Send size={20} className="text-blue-500"/> Consola de Control Bot
            </h2>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="input-field flex-1" 
                placeholder="Ej: !clear, !announce Hola" 
                value={command}
                onChange={(e) => setCommand(e.target.value)}
              />
              <button onClick={executeCommand} className="btn-primary">Ejecutar</button>
            </div>
            <p className="text-sm mt-2 text-slate-500">{status}</p>
          </div>

          <div className="glass-panel p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users size={20} className="text-blue-500"/> Gestión de Usuarios
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800">
                    <th className="pb-3 font-medium">Usuario</th>
                    <th className="pb-3 font-medium">Discord ID</th>
                    <th className="pb-3 font-medium">Rol</th>
                    <th className="pb-3 font-medium text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {/* Mapeo de datos de Supabase iría aquí */}
                  <tr>
                    <td className="py-3">Usuario Ejemplo</td>
                    <td className="py-3 text-slate-400">123456789</td>
                    <td className="py-3"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Policía</span></td>
                    <td className="py-3 text-right">
                      <button className="text-red-500 hover:text-red-400 transition-colors"><Trash2 size={18}/></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-xl font-semibold mb-4">Estado del Sistema</h2>
            <div className="space-y-4">
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-400">Bot Status</span>
                <span className="text-green-500 font-bold">ONLINE</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-400">DB Connection</span>
                <span className="text-green-500 font-bold">OK</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-400">Server Latency</span>
                <span className="text-blue-400">42ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock de lucide-react para evitar errores en el renderizado estático si no está instalado
import { Users } from 'lucide-react';
