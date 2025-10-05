export default async function handler(req, res) {
  const TOKEN = "7579742680:AAHfg0kxor0UcIr_F8Z7nXOR7FvVMoBpFhI";
  const CHAT_ID = "-1002537770823";

  const { payout, sub1, country, offer_name, status } = req.query;

  const text = 📢 *Lead from ClickDealer!*\n\n💰 *Payout:* ${payout || "N/A"}\n🌍 *Country:* ${country || "N/A"}\n🎯 *Offer:* ${offer_name || "N/A"}\n🧾 *Sub:* ${sub1 || "N/A"}\n📊 *Status:* ${status || "N/A"};

  try {
    await fetch(https://api.telegram.org/bot${TOKEN}/sendMessage, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown"
      })
    });

    return res.status(200).send("✅ Message sent to Telegram!");
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).send("❌ Failed to send message");
  }
}