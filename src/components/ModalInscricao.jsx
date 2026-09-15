import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, User, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ModalInscricao({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    instituicao: '',
    tipoIngresso: 'academico',
    trilhaInteresse: 'ia',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7c3aed', '#8b5cf6', '#a78bfa', '#3b82f6', '#ffffff'],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nome: '',
      email: '',
      instituicao: '',
      tipoIngresso: 'academico',
      trilhaInteresse: 'ia',
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'rgba(11, 15, 34, 0.98)',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(124, 58, 237, 0.2)',
          borderRadius: '1.5rem',
          maxWidth: '540px',
          width: '100%',
          padding: '2.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#60a5fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)';
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span className="badge-tag" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={12} /> INSCRIÇÃO OFICIAL
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>
                Garanta Seu Ingresso
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                21 a 24 de Outubro • FACOM / UFU
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Nome Completo
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Alan Turing"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#a78bfa')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.25)')}
                  />
                  <User size={16} color="#a78bfa" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.4rem' }}>
                  E-mail Acadêmico / Principal
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@ufu.br"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#a78bfa')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.25)')}
                  />
                  <Mail size={16} color="#a78bfa" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Tipo de Ingresso
                  </label>
                  <select
                    name="tipoIngresso"
                    value={formData.tipoIngresso}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#11172e',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="facom_ufu">Aluno FACOM / UFU (R$ 45,00)</option>
                    <option value="outros_ufu">Alunos Outros Cursos UFU (R$ 50,00)</option>
                    <option value="externo">Público Externo (R$ 60,00)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Trilha Principal
                  </label>
                  <select
                    name="trilhaInteresse"
                    value={formData.trilhaInteresse}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#11172e',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="ia">Inteligência Artificial</option>
                    <option value="cyber">Cibersegurança</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="games">Jogos Digitais</option>
                    <option value="dados">Engenharia de Dados</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '1rem',
                  borderRadius: '0.65rem',
                  marginTop: '0.75rem',
                }}
              >
                <span>Confirmar Minha Inscrição</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(37, 99, 235, 0.2)',
                border: '1px solid #60a5fa',
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                boxShadow: '0 0 25px rgba(37, 99, 235, 0.4)',
              }}
            >
              <CheckCircle size={38} />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Inscrição Confirmada com Sucesso!
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Parabéns, <strong>{formData.nome || 'Participante'}</strong>! Seu credenciamento foi registrado.
              Enviamos todos os detalhes para <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={handleReset}
              className="btn-primary"
              style={{
                padding: '0.85rem 2rem',
                borderRadius: '0.65rem',
                fontSize: '0.95rem',
              }}
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
