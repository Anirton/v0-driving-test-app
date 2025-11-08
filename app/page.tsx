import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image src="https://ibb.co/SDPq9Pyf"="Logo" fill className="object-contain" priority />
              </div>
              <div className="min-w-0">
                <h1 className="text-base md:text-xl font-bold text-balance line-clamp-1">Teste de Condução</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Preparação INATTER</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Como Funciona
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Preços
              </Link>
              <Link href="/free-test">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-yellow-400 hover:bg-yellow-400 text-foreground border-yellow-400"
                >
                  Teste Grátis
                </Button>
              </Link>
            </nav>
            <Link href="/free-test" className="md:hidden">
              <Button size="sm" className="bg-yellow-400 hover:bg-yellow-400 text-foreground text-xs">
                Teste
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-6 md:py-8 pt-8 md:pt-12">
        <Card className="max-w-3xl mx-auto border-2 border-green-600/20 bg-gradient-to-br from-green-600/5 to-transparent">
          <CardHeader className="text-center p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Veja Como Funciona</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Assista ao vídeo e descubra como passar no exame
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-4 md:p-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Vídeo de apresentação</p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                <Link href="/pricing">Começar Agora</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
            Prepare-se para o Exame Teórico de Condução
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
            Pratique com questões reais do INATTER. Simule o exame oficial e estude por categorias para garantir a sua
            aprovação.
          </p>
          <div className="flex flex-col gap-3 md:gap-4 justify-center pt-2 md:pt-4">
            <Button
              asChild
              size="lg"
              className="text-base bg-yellow-400 hover:bg-yellow-400 text-foreground w-full md:w-auto md:inline-flex"
            >
              <Link href="/free-test">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Teste Grátis
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent w-full md:w-auto md:inline-flex"
            >
              <Link href="/pricing">Ver Planos</Link>
            </Button>
          </div>
          <div className="pt-2 md:pt-4">
            <Link
              href="/how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
              Como funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Escolha Seu Plano</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Acesso ilimitado para estudar e passar no exame
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Plano Semanal
                </CardTitle>
                <div className="flex items-baseline gap-2 pt-2">
                  {/* Updated price for weekly plan */}
                  <span className="text-3xl font-bold">199 MT</span>
                  <span className="text-muted-foreground">/semana</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Simulações ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Prática por categoria</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>30 questões reais</span>
                  </li>
                </ul>
                <Link href="/payment?plan=weekly">
                  <Button className="w-full">Começar Agora</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Mais Popular
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Plano Mensal
                </CardTitle>
                <div className="flex items-baseline gap-2 pt-2">
                  {/* Updated price for monthly plan */}
                  <span className="text-3xl font-bold">350 MT</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-green-600 font-medium">Economize 26%</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Tudo do Plano Semanal</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="font-medium">Acesso por 30 dias</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="font-medium">Estatísticas avançadas</span>
                  </li>
                </ul>
                <Link href="/payment?plan=monthly">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Começar Agora</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Ver todos os detalhes dos planos →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Recursos Disponíveis</h3>
          <p className="text-muted-foreground">Tudo que você precisa para passar no exame</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-green-600/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
              </div>
              <CardTitle>Modo Simulação</CardTitle>
              <CardDescription className="text-pretty">
                Exame completo com 30 questões e 30 minutos de tempo. Experiência idêntica ao exame oficial do INATTER.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/simulation">Começar Simulação</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-600/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-yellow-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <CardTitle>Modo Prática</CardTitle>
              <CardDescription className="text-pretty">
                Estude por categorias temáticas com feedback imediato. Aprenda com explicações detalhadas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/practice/categories">Praticar Agora</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-600/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <CardTitle>Resultados</CardTitle>
              <CardDescription className="text-pretty">
                Acompanhe o seu progresso e reveja as questões que errou para melhorar continuamente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/results-protected">Ver Resultados</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-600/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                </svg>
              </div>
              <CardTitle>Questões Erradas</CardTitle>
              <CardDescription className="text-pretty">
                Revise todas as questões que respondeu incorretamente para reforçar o seu conhecimento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/wrong-protected">Rever Erros</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-600/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gray-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <CardTitle>Questões Marcadas</CardTitle>
              <CardDescription className="text-pretty">
                Aceda rapidamente às questões que marcou para revisão posterior durante os seus estudos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/">Ver Marcadas</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-600/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                  <circle cx="12" cy="12" r="2" strokeWidth={2} />
                </svg>
              </div>
              <CardTitle>Categorias</CardTitle>
              <CardDescription className="text-pretty">
                Estude temas específicos: sinais, prioridades, velocidade, infrações e muito mais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/practice/categories">Escolher Categoria</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <Card className="max-w-3xl mx-auto bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl">Como Funciona o Exame Oficial?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              O exame teórico de condução do INATTER consiste em{" "}
              <strong className="text-foreground">30 questões de escolha múltipla</strong> com um tempo limite de{" "}
              <strong className="text-foreground">30 minutos</strong>.
            </p>
            <p>
              Para ser aprovado, precisa de acertar pelo menos{" "}
              <strong className="text-foreground">27 questões (90%)</strong>. A partir de 4 erros, é reprovado e terá de
              repetir o exame.
            </p>
            <p>
              Use o nosso modo de simulação para praticar em condições reais e o modo de prática para estudar por
              categorias e melhorar os seus conhecimentos.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
