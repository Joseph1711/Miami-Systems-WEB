"use client";
import React from 'react';
import { FileText, Car, DollarSign, Users } from 'lucide-react';

export default function DepartmentDashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Panel Departamental (MDT)</h1>
        <div className="flex gap-2">
          <select className="input-field">
            <option>LSPD - Policía</option>
            <option>LSFD - Bomberos</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6 flex flex-col items-center text-center space-y-2">
          <FileText className="text-blue-500 mb-2" size={32}/>
          <span className="text-slate-400 text-sm">Casos Activos</span>
          <span className="text-3xl font-bold">24</span>
        </div>
        <div className="glass-panel p-6 flex flex-col items-center text-center space-y-2">
          <Car className="text-green-500 mb-2" size={32}/>
          <span className="text-slate-400 text-sm">Flota Operativa</span>
          <span className="text-3xl font-bold">12/15</span>
        </div>
        <div className="glass-panel p-6 flex flex-col items-center text-center space-y-2">
          <DollarSign className="text-yellow-500 mb-2" size={32}/>
          <span className="text-slate-400 text-sm">Presupuesto</span>
          <span className="text-3xl font-bold">$45,200</span>
        </div>
        <div className="glass-panel p-6 flex flex-col items-center text-center space-y-2">
          <Users className="text-purple-500 mb-2" size={32}/>
          <span className="text-slate-400 text-sm">Personal Activo</span>
          <span className="text-3xl font-bold">8</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText size={20} className="text-blue-500"/> Registro de Casos Recientes
          </h2>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 bg-slate-800/50 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium">Robo de Vehículo - ID #{(100 + i)}</p>
                  <p className="text-xs text-slate-400">Oficial: J. Smith | Hace 2 horas</p>
                </div>
                <button className="text-blue-400 hover:underline text-sm">Ver Detalles</button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Car size={20} className="text-green-500"/> Estado de la Flota
          </h2>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 bg-slate-800/50 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium">Crucero Interceptor - {i}04</p>
                  <p className="text-xs text-slate-400">Estado: En Patrulla</p>
                </div>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Activo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
