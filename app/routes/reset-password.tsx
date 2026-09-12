import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'

export const Route = createFileRoute('/reset-password')({
  component: ResetPasswordPage,
})

function ResetPasswordPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [linkExpired, setLinkExpired] = useState(false)

  const handleReset = async () => {
    if (!password || password !== confirm) {
      toast.error('Les mots de passe ne correspondent pas')
      return
    }
    if (password.length < 8) {
      toast.error('Le mot de passe doit contenir au moins 8 caractères')
      return
    }
    setIsLoading(true)
    try {
      // TODO: await supabase.auth.updateUser({ password })
      await new Promise((r) => setTimeout(r, 800))
      toast.success('Mot de passe mis à jour avec succès')
      setTimeout(() => navigate({ to: '/' }), 1000)
    } catch (err: any) {
      // Lien expiré ou invalide
      if (err?.message?.includes('expired') || err?.status === 401) {
        setLinkExpired(true)
      } else {
        toast.error('Erreur lors de la mise à jour du mot de passe')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
      <Toaster theme="dark" position="top-center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm space-y-8"
      >
        {/* Logo */}
        <a href="/" className="block text-lg font-semibold text-white tracking-tight">
          REFLET
        </a>

        {linkExpired ? (
          /* Lien expiré */
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-white">Lien expiré</h1>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Ce lien de réinitialisation n'est plus valide. Demandez-en un nouveau.
              </p>
            </div>
            <a
              href="/login?tab=forgot"
              className="block w-full h-11 rounded-lg text-sm font-semibold bg-[#c9ab1e] text-[#0b0b0b] hover:bg-[#b89a18] transition-colors flex items-center justify-center"
            >
              Demander un nouveau lien
            </a>
            <a href="/" className="block text-sm text-zinc-500 hover:text-zinc-300 text-center transition-colors">
              Retour à l'accueil
            </a>
          </div>
        ) : (
          /* Formulaire reset */
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-white">Nouveau mot de passe</h1>
              <p className="text-sm text-zinc-500">
                Choisissez un mot de passe d'au moins 8 caractères.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Nouveau mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-lg border border-white/10 bg-white/5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/25 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Confirmer</label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  onKeyDown={(e) => { if (e.key === 'Enter') handleReset() }}
                  className="w-full h-11 px-4 rounded-lg border border-white/10 bg-white/5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/25 transition-colors"
                />
              </div>

              <button
                onClick={handleReset}
                disabled={isLoading}
                className="w-full h-11 rounded-lg text-sm font-semibold bg-[#c9ab1e] text-[#0b0b0b] hover:bg-[#b89a18] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Mise à jour…' : 'Mettre à jour le mot de passe'}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
