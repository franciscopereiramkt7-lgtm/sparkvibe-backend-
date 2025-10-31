# 🧭 SparkVibe — Checklist Estratégico de Decisão Técnica

> Usa este checklist antes de qualquer passo técnico (deploy, DNS, API, integrações, etc).  
> Ele garante clareza, reduz retrabalho e aumenta a previsibilidade da operação.

---

## 1️⃣ Contexto e Propósito
**Pergunta:** O que exatamente estou a tentar alcançar neste passo?  
- [ ] Validar o produto (MVP/teste rápido)?  
- [ ] Estabilizar produção?  
- [ ] Escalar/otimizar performance?  
- [ ] Fazer integração externa (pagamentos, AI, etc)?  

🧩 Isto define se priorizamos **velocidade**, **segurança** ou **arquitetura durável**.

---

## 2️⃣ Propriedade e Domínio
**Pergunta:** Já existe domínio/subdomínio/infrainstrutura definida?  
- [ ] Domínio já registado (ex: sparkvibe.cloud)?  
- [ ] Este passo usa domínio temporário, staging ou final?  
- [ ] Plano de DNS documentado (onde está hospedado, quem gere)?  

💡 Evita conflitos de DNS e perda de controlo de tráfego.

---

## 3️⃣ Acesso e Credenciais
**Pergunta:** Quem tem as chaves e onde estão guardadas?  
- [ ] API Keys seguras (.env, GitHub Secrets, Vercel Env)?  
- [ ] Evitar duplicação entre ambientes.  
- [ ] Responsável pela rotação de credenciais definido?  

🔒 Garante segurança e evita falhas de acesso.

---

## 4️⃣ Deploy e Integração
**Pergunta:** Este deploy afeta utilizadores, dados ou integrações externas?  
- [ ] Ambiente de teste ou produção claramente identificado?  
- [ ] Pipeline (GitHub → Vercel/Supabase) limpo e automatizado?  
- [ ] Rollback fácil se algo falhar?  

⚙️ Evita downtime e problemas de sincronização.

---

## 5️⃣ Comunicação e Alinhamento
**Pergunta:** Quem precisa saber deste passo?  
- [ ] Equipa ou colaborador informado.  
- [ ] Notas de versão/documentação atualizada.  
- [ ] Próximo passo definido.  

🧠 A visibilidade transforma código em negócio escalável.

---

## ✅ Mini-Resumo Operativo
Antes de executar qualquer comando:

> “Este passo serve para _______.  
> Estou a usar o domínio/env _______.  
> e o risco de impacto é _______.  
> Próximo passo será _______.”

---

**Autor:** Francisco Franco  
**Projeto:** SparkVibe  
**Data:** $(date +%Y-%m-%d)
