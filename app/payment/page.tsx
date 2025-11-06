"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const SmartphoneIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
)

const WalletIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "weekly"

  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "emola">("mpesa")
  const [phoneNumber, setPhoneNumber] = useState("")

  const planDetails = {
    weekly: { name: "Plano Semanal", price: "99 MT", duration: "7 dias" },
    monthly: { name: "Plano Mensal", price: "299 MT", duration: "30 dias" },
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails] || planDetails.weekly

  const handlePayment = () => {
    if (!phoneNumber.trim()) {
      alert("Por favor, insira seu número de telefone")
      return
    }

    const paymentMethodName = paymentMethod === "mpesa" ? "M-Pesa" : "e-Mola"
    const message = `Olá, quero pagar o plano ${currentPlan.name} (${currentPlan.price}) via ${paymentMethodName}. Meu número: ${phoneNumber}`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=258843598240&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
          >
            <ArrowLeftIcon />
            Voltar aos Planos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Plano Selecionado</p>
                  <p className="text-lg font-semibold">{currentPlan.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duração</p>
                  <p className="text-lg font-semibold">{currentPlan.duration}</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Total</p>
                    <p className="text-2xl font-bold text-green-600">{currentPlan.price}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                ✓ Acesso imediato após confirmação
                <br />✓ Simulações ilimitadas
                <br />✓ Todas as categorias incluídas
                <br />✓ Suporte por WhatsApp
              </p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Método de Pagamento</h2>

            <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)} className="mb-6">
              <Card
                className={`p-4 cursor-pointer transition-colors ${paymentMethod === "mpesa" ? "border-green-600 bg-green-50/50" : ""}`}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <RadioGroupItem value="mpesa" id="mpesa" />
                  <SmartphoneIcon />
                  <div className="flex-1">
                    <p className="font-medium">M-Pesa</p>
                    <p className="text-sm text-muted-foreground">Pagamento via M-Pesa</p>
                  </div>
                </label>
              </Card>

              <Card
                className={`p-4 cursor-pointer transition-colors ${paymentMethod === "emola" ? "border-green-600 bg-green-50/50" : ""}`}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <RadioGroupItem value="emola" id="emola" />
                  <WalletIcon />
                  <div className="flex-1">
                    <p className="font-medium">e-Mola</p>
                    <p className="text-sm text-muted-foreground">Pagamento via e-Mola</p>
                  </div>
                </label>
              </Card>
            </RadioGroup>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="84 359 8240"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground">Insira o número que usará para o pagamento</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900 font-medium mb-2">Como funciona:</p>
                  <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                    <li>Insira seu número de telefone</li>
                    <li>Clique no botão "Pagar"</li>
                    <li>Você será redirecionado para o WhatsApp</li>
                    <li>Envie a mensagem e aguarde instruções de pagamento</li>
                    <li>Após confirmação, você receberá acesso imediato</li>
                  </ol>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" onClick={handlePayment}>
                  Pagar
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Você será redirecionado para o WhatsApp para completar o pagamento
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
