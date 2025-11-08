import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Zap, Crown } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        <div className="mb-6 md:mb-8">
          <Link href="/" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
            ← Voltar ao Início
          </Link>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Escolha Seu Plano</h1>
          <p className="text-sm md:text-lg text-muted-foreground">
            Acesso ilimitado para estudar e passar no exame do INATTER
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Weekly Plan */}
          <Card className="p-4 md:p-8 relative border-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-600" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold">Plano Semanal</h3>
            </div>

            <div className="mb-4 md:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold">199 MT</span>
                <span className="text-xs md:text-base text-muted-foreground">/semana</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">Acesso completo por 7 dias</p>
            </div>

            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Simulações ilimitadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Prática por categoria</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">30 questões reais</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Explicações detalhadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Revisão de erros</span>
              </li>
            </ul>

            <Link href="/payment?plan=weekly" className="block">
              <Button className="w-full" size="lg">
                Começar Agora
              </Button>
            </Link>
          </Card>

          {/* Monthly Plan */}
          <Card className="p-4 md:p-8 relative border-2 border-green-600 shadow-lg">
            <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
              Mais Popular
            </div>

            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-green-600/10 p-2 rounded-lg">
                <Crown className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold">Plano Mensal</h3>
            </div>

            <div className="mb-4 md:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold">350 MT</span>
                <span className="text-xs md:text-base text-muted-foreground">/mês</span>
              </div>
              <p className="text-xs md:text-sm text-green-600 font-medium mt-2">Economize 26% vs. semanal</p>
            </div>

            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base">Tudo do Plano Semanal</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Acesso por 30 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Estatísticas avançadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Atualizações de questões</span>
              </li>
            </ul>

            <Link href="/payment?plan=monthly" className="block">
              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                Começar Agora
              </Button>
            </Link>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-4">
            Não tem certeza? Experimente nosso teste grátis primeiro
          </p>
          <Link href="/free-test">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-400 border-yellow-400 text-black"
            >
              Fazer Teste Grátis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
