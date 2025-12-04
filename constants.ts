import { Box, Layers, Truck, ShieldCheck, Target, CalendarClock, Sparkles, Users } from 'lucide-react';
import { Feature, NavLink, Step, Testimonial, ValueProp } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Casos', href: '#casos' },
  { label: 'Como Funciona', href: '#como-funciona' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Precisão CAD/CAM',
    description: 'Fresagem industrial com margem de erro zero para adaptação perfeita.',
    icon: Box,
  },
  {
    title: 'Materiais Premium',
    description: 'Trabalhamos exclusivamente com Zircônia Multilayer e polímeros de alta densidade.',
    icon: Layers,
  },
  {
    title: 'Logística Confiável',
    description: 'Sistema de coleta e entrega rastreável para garantir seus prazos.',
    icon: Truck,
  },
  {
    title: 'Suporte Técnico',
    description: 'Discussão de casos complexos diretamente com nossos ceramistas.',
    icon: ShieldCheck,
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Redução de Retrabalhos',
    description: 'Menos tempo de cadeira perdido em ajustes. Nossas peças chegam prontas para instalar.',
    icon: Target,
  },
  {
    title: 'Previsibilidade',
    description: 'Cronograma rigoroso. Você sabe exatamente quando o caso estará na sua clínica.',
    icon: CalendarClock,
  },
  {
    title: 'Estética Superior',
    description: 'Anatomia natural e textura detalhada que encantam o paciente imediatamente.',
    icon: Sparkles,
  },
  {
    title: 'Parceria Sólida',
    description: 'Não somos apenas um laboratório, somos uma extensão técnica do seu consultório.',
    icon: Users,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    doctorName: "Dr. Felipe Martins",
    role: "Implantodontista",
    quote: "Com a Artvice, reduzimos drasticamente retrabalhos e aumentamos a satisfação dos pacientes. A precisão da barra é incomparável.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    doctorName: "Dra. Juliana Costa",
    role: "Protesista",
    quote: "A estética da gengiva e a translucidez dos dentes são impressionantes. Meus pacientes se emocionam com o resultado.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    doctorName: "Dr. Ricardo Silva",
    role: "Cirurgião Dentista",
    quote: "O suporte técnico faz toda a diferença. Poder discutir o planejamento digital antes da execução evita erros.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Envie seu caso",
    description: "Solicite a coleta ou envie os arquivos STL/PLY pelo nosso portal digital seguro."
  },
  {
    number: "02",
    title: "Produção Artvice",
    description: "Design digital, fresagem 5 eixos e acabamento manual artístico por ceramistas seniores."
  },
  {
    number: "03",
    title: "Entrega Ágil",
    description: "Receba a prótese finalizada, estéril e pronta para instalação no prazo combinado."
  }
];

export const CONTACT_WHATSAPP = "5511999999999"; // Placeholder