
"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("makeuplalab-cookie-consent");

      if (!consent) {
        setVisible(true);
      }
    } catch (error) {
      setVisible(true);
    }

    setReady(true);
  }, []);

  function saveConsent(analyticsAllowed) {
    const consent = {
      necessary: true,
      analytics: analyticsAllowed,
      date: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        "makeuplalab-cookie-consent",
        JSON.stringify(consent)
      );
    } catch (error) {
      console.error("Não foi possível salvar as preferências.", error);
    }

    setVisible(false);
  }

  if (!ready || !visible) return null;

  return (
    <div style={styles.overlay}>
      <section
        style={styles.banner}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
      >
        <span style={styles.label}>SUA PRIVACIDADE</span>

        <h2 id="cookie-title" style={styles.title}>
          Sua experiência importa para nós.
        </h2>

        <p style={styles.description}>
          Utilizamos cookies necessários para o funcionamento do site.
          Com sua autorização, também poderemos utilizar cookies analíticos
          para entender como os visitantes navegam e melhorar sua experiência.
        </p>

        {customizing && (
          <div style={styles.preferences}>
            <div style={styles.preferenceRow}>
              <div>
                <strong>Cookies necessários</strong>
                <p>Essenciais para o funcionamento do site.</p>
              </div>
              <span style={styles.alwaysOn}>Sempre ativos</span>
            </div>

            <div style={styles.preferenceRow}>
              <div>
                <strong>Cookies analíticos</strong>
                <p>Permitem analisar visitas e interações no site.</p>
              </div>

              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                aria-label="Permitir cookies analíticos"
              />
            </div>
          </div>
        )}

        <div style={styles.actions}>
          <button
            style={styles.secondaryButton}
            onClick={() => saveConsent(false)}
          >
            Rejeitar opcionais
          </button>

          {customizing ? (
            <button
              style={styles.secondaryButton}
              onClick={() => saveConsent(analytics)}
            >
              Salvar preferências
            </button>
          ) : (
            <button
              style={styles.secondaryButton}
              onClick={() => setCustomizing(true)}
            >
              Personalizar
            </button>
          )}

          <button
            style={styles.primaryButton}
            onClick={() => saveConsent(true)}
          >
            Aceitar todos
          </button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 99999,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "20px",
    background: "rgba(0,0,0,0.35)",
  },
  banner: {
    width: "100%",
    maxWidth: "850px",
    background: "#fff",
    color: "#252525",
    padding: "28px",
    borderRadius: "12px",
    boxShadow: "0 8px 35px rgba(0,0,0,0.15)",
  },
  label: {
    fontSize: "10px",
    letterSpacing: "2px",
    color: "#9b8061",
    fontWeight: 700,
  },
  title: {
    fontSize: "21px",
    fontWeight: 600,
    margin: "10px 0",
  },
  description: {
    fontSize: "13px",
    lineHeight: 1.7,
    color: "#666",
  },
  preferences: {
    marginTop: "20px",
    borderTop: "1px solid #eee",
  },
  preferenceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "14px 0",
    borderBottom: "1px solid #eee",
    fontSize: "13px",
  },
  alwaysOn: {
    fontSize: "11px",
    color: "#777",
    whiteSpace: "nowrap",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "22px",
  },
  primaryButton: {
    background: "#252525",
    color: "#fff",
    border: "1px solid #252525",
    padding: "12px 17px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },
  secondaryButton: {
    background: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    padding: "12px 17px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },
};
