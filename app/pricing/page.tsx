import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Crown } from "lucide-react"

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

        {/* Monthly Plan */}
        <div className="max-w-md mx-auto mb-8 md:mb-12">
          <Card className="p-4 md:p-8 relative border-2 border-green-600 shadow-lg">
            <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
              Melhor Escolha
            </div>

            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-green-600/10 p-2 rounded-lg">
                <Crown className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold">Plano Mensal</h3>
            </div>

            <div className="mb-4 md:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold">300 MT</span>
                <span className="text-xs md:text-base text-muted-foreground">/mês</span>
              </div>
              <p className="text-xs md:text-sm text-green-600 font-medium mt-2">Acesso completo por 30 dias</p>
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

            <a href="https://wa.link/k71ms7" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                Começar Agora
              </Button>
            </a>
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
