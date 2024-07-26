import { motion } from "framer-motion";

const Contact = () => {
  const details = {
    name: 'Abhishek Yadav',
    email: 'abhishekyadav7102004@gmail.com',
    phone: '+1234567890',
    address: 'Tarkulwa Deoria, Uttar Pradesh',
  };

  return (
    <div className="contact-us p-8 bg-gray-100 dark:bg-[#191740] dark:shadow-md dark:shadow-indigo-600 rounded-lg">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Information
      </motion.h2>
      <div className="contact-us__details border-b-2 border-gray-300 dark:border-gray-700">
        {Object.entries(details).map(([key, value]) => (
          value && (
            <motion.div
              key={key}
              className="contact-us__detail mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * Object.keys(details).indexOf(key) }}
            >
              <span className="contact-us__detail-label text-lg font-semibold text-gray-800 dark:text-white mr-4 w-36">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
              {key === 'email' ? (
                <a className="contact-us__detail-value text-lg text-blue-600 dark:text-blue-400 hover:underline" href={`mailto:${value}`}>{value}</a>
              ) : key === 'phone' ? (
                <a className="contact-us__detail-value text-lg text-blue-600 dark:text-blue-400 hover:underline" href={`tel:${value}`}>{value}</a>
              ) : (
                <span className="contact-us__detail-value text-lg text-gray-900 dark:text-gray-300">{value}</span>
              )}
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
};

export default Contact;
