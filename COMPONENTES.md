# SCI-FI SPACE - Documentação de Componentes

## 🎯 Visão Geral

Esta documentação descreve todos os componentes React utilizados no projeto SCI-FI SPACE.

## 📦 Componentes

### 1. **StarField**
Campo animado de estrelas que forma o fundo da página.

**Props**: Nenhuma  
**Localização**: `src/components/StarField.tsx`

**Características**:
- 100 estrelas animadas com efeito de piscar
- Posicionamento aleatório na viewport
- Animações contínuas sem interferir com interações

### 2. **Navigation**
Barra de navegação fixa no topo da página.

**Props**: Nenhuma  
**Localização**: `src/components/Navigation.tsx`

**Características**:
- Menu responsivo (desktop e mobile)
- Links de navegação suave
- Efeito de underline ao hover
- Logo com gradiente neon

### 3. **Hero**
Seção hero principal com chamada para ação.

**Props**:
```typescript
interface HeroProps {
  title: string          // Título principal
  subtitle: string       // Subtítulo descritivo
  cta: string           // Texto do botão
}
```

**Localização**: `src/components/Hero.tsx`

**Características**:
- Gradientes animados de fundo
- Animação de entrada suave
- Indicador de scroll
- Responsivo para todos os tamanhos de tela

### 4. **Exploration**
Grade de cards de exploração cósmica.

**Props**: Nenhuma  
**Localização**: `src/components/Exploration.tsx`

**Características**:
- 4 cards com ícones e descrições
- Animações ao entrar na viewport
- Efeito hover com elevação
- Grid responsivo (1 a 4 colunas)

### 5. **Missions**
Seção de missões espaciais com status.

**Props**: Nenhuma  
**Localização**: `src/components/Missions.tsx`

**Características**:
- Cards de missão com 3 status (ativa, concluída, planejada)
- Cronograma visual de eventos futuros
- Cores diferentes por status
- Animações em cascade

### 6. **Technology**
Showcase de tecnologias futuristas.

**Props**: Nenhuma  
**Localização**: `src/components/Technology.tsx`

**Características**:
- 6 cards com tecnologias principais
- Seção de especificações técnicas
- Efeitos de glow ao hover
- Grade responsiva

### 7. **Contact**
Formulário de contato com campos.

**Props**: Nenhuma  
**Localização**: `src/components/Contact.tsx`

**Características**:
- Formulário com validação visual
- Campos: Nome, Email, Especialidade, Mensagem
- Links para redes sociais
- Design responsivo

### 8. **Footer**
Rodapé com links e informações.

**Props**: Nenhuma  
**Localização**: `src/components/Footer.tsx`

**Características**:
- Links de navegação rápida
- Links de recursos e legal
- Informações de copyright
- Grid responsivo (1 a 4 colunas)

## 🎨 Design System

### Cores
```
Espaço (Backgrounds):
- space-900: #0a0e27
- space-800: #1a1f3a
- space-700: #2a2f4a
- space-600: #3a3f5a

Neon (Primárias):
- neon-blue: #00d4ff
- neon-purple: #b700ff
- neon-pink: #ff006e
- neon-cyan: #00f5ff
```

### Tipografia
- **Heading**: Space Grotesk (400, 500, 600, 700)
- **Body**: Space Grotesk
- **Mono**: Space Mono

### Animações
- `float`: Flutuação leve (3s)
- `glow`: Efeito de brilho (2s)
- `pulse-glow`: Pulso brilhante (2s)

## 📱 Responsividade

**Breakpoints**:
- `sm`: 640px (tablet pequeno)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop pequeno)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (desktop grande)

## ⚡ Performance

- Lazy loading de imagens
- Code splitting automático do Next.js
- Otimização de animações com Framer Motion
- CSS crítico inline

## 🔧 Customização

### Adicionar Novas Cores
1. Edite `tailwind.config.ts`
2. Adicione cores sob `theme.extend.colors`
3. Use com classe Tailwind

### Adicionar Novas Animações
1. Edite `src/globals.css`
2. Defina @keyframes
3. Registre em `tailwind.config.ts`

### Criar Novo Componente
1. Crie arquivo em `src/components/NomeComponente.tsx`
2. Implemente interface React.FC
3. Use tipagem TypeScript
4. Exporte como named export
5. Importe e use em `src/app/page.tsx`

## 📚 Dependências Principais

- `next@^14.0.0` - Framework
- `react@^18.2.0` - UI
- `typescript@^5.0.0` - Tipagem
- `tailwindcss@^3.3.0` - Estilos
- `framer-motion@^10.16.0` - Animações

---

**Última atualização**: Dezembro 2025