# Keratinix Nutrition: Local Development & Deployment Guide

This guide explains how to run the Keratinix Next.js website locally on your computer for testing, and how to push your updates live to Firebase Hosting when you are ready.

## 💻 1. Running the App Locally

To view your website while making changes, you should run the local development server.

1. Open a terminal in your IDE.
2. Make sure you are inside the `keratinix-web` folder:
   ```bash
   cd "desktop/Antigravity Folder/Keratinix Nutrition/keratinix-web"
   ```
3. Start the development server by running:
   ```bash
   npm run dev
   ```
4. Open your web browser and go to: **[http://localhost:3000](http://localhost:3000)**
5. *Magic:* Any changes you save in your code files (like editing `src/app/page.tsx`) will automatically instantly refresh in your browser window!

---

## 🚀 2. Updating the Live Website (Firebase)

When you have finished testing your changes locally and want the world to see them, you need to build the project and deploy it to your Firebase server.

1. Open a terminal (if `npm run dev` is running, you can open a *new* terminal split, or press `Ctrl + C` in the existing terminal to stop the local server).
2. Make sure you are inside the `keratinix-web` folder:
   ```bash
   cd "desktop/Antigravity Folder/Keratinix Nutrition/keratinix-web"
   ```
3. **Step 1: Build the production application.** This command compiles your Next.js application into highly-optimized static files inside an `out/` folder:
   ```bash
   npm run build
   ```
4. **Step 2: Deploy to Firebase.** Once the build is successfully completed, run the following command to push those static files to your live hosting URL:
   ```bash
   firebase deploy --only hosting
   ```
5. Wait a few seconds for the upload to complete. Your changes are now live at: **[https://keratinix-nutrition-ui.web.app/](https://keratinix-nutrition-ui.web.app/)**

---

### Troubleshooting Firebase (If Deployment Fails)
If `firebase deploy` throws an error saying "No currently active project", you can force it to use your Keratinix project by running this command instead:
```bash
firebase deploy --project keratinix-nutrition-ui
```
