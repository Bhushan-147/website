// src/components/Contact.jsx
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    toast.loading('Sending message...', { id: 'emailStatus' })

    emailjs
      .sendForm(
        'your_service_id',     // Replace with your EmailJS service ID
        'your_template_id',    // Replace with your EmailJS template ID
        formRef.current,
        'your_public_key'      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!', { id: 'emailStatus' })
          formRef.current.reset()
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', { id: 'emailStatus' })
        }
      )
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full flex flex-col md:flex-row gap-12"
      >
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Whether you're interested in collaborating or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <Mail className="w-5 h-5" />
              <span>contact@chahatarora.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <MapPin className="w-5 h-5" />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="user_name"
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <input name="user_email"
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>
          <input name="subject"
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
          <textarea name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
