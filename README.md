# ScanKavach
ScanKavach: Label-Free Anomaly Detection for Medical Image Screening with an Input Safety Gate and Explainable, Calibrated Verdicts
# 🛡️ ScanKavach

### Label-Free Anomaly Screening and Decision Support for Medical Images

> **"Your shield for safer medical image screening."**

**ScanKavach** is a browser-based medical image screening research prototype designed to identify unusual visual patterns in chest X-rays and radiographic scans.

Instead of requiring disease labels for its primary anomaly-detection workflow, ScanKavach learns the visual characteristics of healthy reference scans and identifies images that differ from that learned distribution.

The system is designed as a **screening and decision-support tool**, not as a diagnostic system.

---

## ⚠️ Clinical Safety Disclaimer

> **This system flags unusual image patterns for clinician review. It does not provide a medical diagnosis.**

The optional condition-suggestion module provides AI-generated pattern suggestions and must not be interpreted as a confirmed diagnosis.

> **AI-suggested finding ≠ confirmed diagnosis.**
>
> All results must be reviewed and confirmed by a qualified healthcare professional.

---

# 🚀 Key Features

- 🩻 Label-free medical image anomaly screening
- 🛡️ Multi-stage input safety validation
- 🧠 Patch-based visual anomaly detection
- 📊 Empirically calibrated screening thresholds
- 🔍 Anomaly heatmap visualization
- 🏥 Nearest healthy reference comparison
- 🔬 Optional condition-suggestion decision support
- ⚡ Batch image triage
- 📄 PDF screening report generation
- 🌐 Multilingual interface
- 🔐 Client-side privacy architecture
- 📜 Model card and audit logging
- 🤖 Offline rule-based assistant
- 🤖 Optional Gemini-powered assistant

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │   Medical Image     │
                    │     Upload          │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │   Input Safety      │
                    │       Gate           │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Image Preprocessing  │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Feature Extraction   │
                    └──────────┬──────────┘
                               ↓
              ┌────────────────┴────────────────┐
              ↓                                 ↓
    ┌─────────────────────┐          ┌─────────────────────┐
    │ Anomaly Detection   │          │ Optional Condition  │
    │    / Memory Bank    │          │ Suggestion Module   │
    └──────────┬──────────┘          └──────────┬──────────┘
               ↓                                ↓
    ┌─────────────────────┐          ┌─────────────────────┐
    │ Anomaly Score       │          │ AI-Suggested        │
    │ + Threshold         │          │ Finding             │
    └──────────┬──────────┘          └──────────┬──────────┘
               └────────────────┬───────────────┘
                                ↓
                    ┌─────────────────────┐
                    │ Screening Result &  │
                    │ Visual Explanation  │
                    └─────────────────────┘
