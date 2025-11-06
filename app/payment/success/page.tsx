import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Pagamento Confirmado!</h1>
        <p className="text-muted-foreground mb-8">
          Sua assinatura foi ativada com sucesso. Agora você tem acesso completo a todas as funcionalidades do app.
        </p>

        <div className="space-y-3">
          <Link href="/simulation" className="block">
            <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
              Começar Simulação
            </Button>
          </Link>
          <Link href="/practice" className="block">
            <Button variant="outline" className="w-full bg-transparent" size="lg">
              Modo Prática
            </Button>
          </Link>
          <Link href="/" className="block">
            <Button variant="ghost" className="w-full">
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
