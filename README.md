# SSAI-Assistance
Social Support Application with AI Assistance

# SSAI-Assistance
A responsive multi-step government social support application portal built using Angular and TypeScript.

# Features

* Multi-step form wizard
* Progress bar navigation
* Responsive UI (mobile, tablet, desktop)
* English + Arabic language support (RTL)
* Accessibility-friendly form controls
* LocalStorage save progress
* AI-assisted text generation
* Accept / Edit / Discard AI suggestions
* Mock API submission


# Tech Stack

Frontend

* Angular 21
* TypeScript
* Angular Material
* Reactive Forms

# State Management

* Angular Signal Store

# Internationalization

* ngx-translate

# API Integration

* Axios
* OpenAI Chat Completions API



# Run the Project

1. Clone Repository

git clone <your-github-url>

2. Install Dependencies

npm install

3. Run Application

ng serve

Open:

http://localhost:4200



# OpenAI API Key Setup

Create or update:

src/environments/environment.ts

# Add your OpenAI API key:

export const environment = {
 production: false,
 openAiApiKey: 'YOUR_API_KEY'
};

# For demo purposes, fallback AI response generation is implemented when API access is unavailable.



# Application Flow

Step 1 — Personal Information

* Name
* National ID
* Date of Birth
* Gender
* Address
* City
* State
* Country
* Phone
* Email

Step 2 — Family & Financial Information

* Marital Status
* Dependents
* Employment Status
* Monthly Income
* Housing Status

Step 3 — Situation Descriptions

* Current Financial Situation
* Employment Circumstances
* Reason for Applying

Users can click Help Me Write to receive AI-generated assistance.



# AI Assistance Workflow

Help Me Write
↓
OpenAI API Call
↓
AI Suggestion Popup
↓
Accept / Edit / Discard
↓
Update Form Field


## Author 
Mahesh Mudike