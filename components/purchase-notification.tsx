"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

const FIRST_NAMES = [
  "Maria",
  "João",
  "Ana",
  "Carlos",
  "Pedro",
  "Sofia",
  "Matilde",
  "Amândio",
  "Lurdes",
  "Daniel",
  "Fátima",
  "Miguel",
  "Rosa",
  "Paulo",
  "Conceição",
  "Afonso",
  "Graça",
  "Nuno",
  "Teresa",
  "Rui",
  "Madalena",
  "Vitor",
  "Cristina",
  "Ricardo",
  "Joana",
  "Tiago",
  "Sandra",
  "Gonçalo",
  "Inês",
  "Raúl",
]

const LAST_NAMES = [
  "Silva",
  "Santos",
  "Ferreira",
  "Oliveira",
  "Costa",
  "Martins",
  "Gomes",
  "Rodrigues",
  "Alves",
  "Sousa",
  "Pereira",
  "Carvalho",
  "Dias",
  "Monteiro",
  "Ribeiro",
  "Pinto",
  "Neves",
  "Teixeira",
  "Barbosa",
  "Machado",
  "Mendes",
  "Guerreiro",
  "Leite",
  "Correia",
  "Simões",
  "Marques",
  "Lopes",
  "Borges",
]

interface Notification {
  id: string
  name: string
}

export function PurchaseNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const addNotification = () => {
      const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]
      const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]
      const name = `${firstName} ${lastName}`
      const id = Math.random().toString(36)

      setNotifications((prev) => [...prev, { id, name }])

      // Remove notification after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      }, 5000)
    }

    // Add first notification after 2 seconds
    const initialTimer = setTimeout(addNotification, 2000)

    // Add new notification every 30 seconds
    const interval = setInterval(addNotification, 30000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 space-y-3 pointer-events-none">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right-full duration-300 pointer-events-auto"
        >
          <div className="flex-1">
            <p className="text-sm font-medium">
              <span className="font-bold">{notification.name}</span> comprou o plano{" "}
              <span className="font-bold">Mensal 350 MT</span>
            </p>
          </div>
          <button
            onClick={() => setNotifications((prev) => prev.filter((n) => n.id !== notification.id))}
            className="text-white hover:opacity-80 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
