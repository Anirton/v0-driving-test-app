import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, BookOpen, Trophy, ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="mb-6 md:mb-8">
          <Link href="/" className="text-xs md:text-sm text-muted-foreground hover:text-foreground">
            ← Voltar ao Início
          </Link>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Como Funciona</h1>
          <p className="text-sm md:text-lg text-muted-foreground">
            Prepare-se para o exame teórico de condução com confiança
          </p>
        </div>

        <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
          <Card className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-green-500/10 p-2 md:p-3 rounded-full flex-shrink-0">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2">1. Escolha o Modo de Estudo</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Comece com o <strong>Modo Prática</strong> para estudar por categoria (sinais de trânsito, regras de
                  prioridade, limites de velocidade, etc.) com feedback imediato. Ou faça um
                  <strong> Teste Grátis</strong> para experimentar o formato do exame.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-yellow-500/10 p-2 md:p-3 rounded-full flex-shrink-0">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2">2. Pratique com Simulações</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Quando estiver pronto, faça o <strong>Modo Simulação</strong> - um exame completo com 30 questões e 30
                  minutos de tempo, igual ao exame real do INATTER. Precisa de 90% (27 questões corretas) para passar.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-red-500/10 p-2 md:p-3 rounded-full flex-shrink-0">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2">3. Revise os Erros</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Após cada teste, revise as questões que errou com explicações detalhadas. Marque questões importantes
                  para revisar mais tarde. Acompanhe seu progresso e melhore continuamente.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-green-600/10 p-2 md:p-3 rounded-full flex-shrink-0">
                <Trophy className="h-5 w-5 md:h-6 md:w-6 text-green-700" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2">4. Passe no Exame Real</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Com prática consistente e revisão dos erros, você estará preparado para passar no exame teórico do
                  INATTER com confiança. Boa sorte!
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Recursos Incluídos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-base font-medium">30 Questões Reais</p>
                <p className="text-xs md:text-sm text-muted-foreground">Baseadas no exame do INATTER</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-base font-medium">6 Categorias</p>
                <p className="text-xs md:text-sm text-muted-foreground">Sinais, prioridade, velocidade e mais</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-base font-medium">Simulação Cronometrada</p>
                <p className="text-xs md:text-sm text-muted-foreground">30 minutos como no exame real</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-base font-medium">Explicações Detalhadas</p>
                <p className="text-xs md:text-sm text-muted-foreground">Aprenda com cada erro</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-base font-medium">Revisão de Erros</p>
                <p className="text-xs md:text-sm text-muted-foreground">Acompanhe questões erradas</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-base font-medium">Marcar Questões</p>
                <p className="text-xs md:text-sm text-muted-foreground">Salve para revisar depois</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/pricing">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
              Ver Planos e Preços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
