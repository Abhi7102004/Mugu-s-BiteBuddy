const Contact = () => {
  const details = {
    name: 'Abhishek Yadav',
    email: 'abhishekyadav7102004@gmail.com',
    phone: '+1234567890', // Add phone number if desired
    address: 'Tarkulwa Deoria ,Uttar Pradesh', // Add address if desired
  };

  return (
    <div className="contact-us dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740]">
      <h2 className="contact-us__title dark:text-white">Contact Information</h2>
      <div className="contact-us__details dark:border-b-[0px]">
        <div className="contact-us__detail">
          <span className="contact-us__detail-label dark:text-white">Name:</span>
          <span className="contact-us__detail-value dark:text-white">{details.name}</span>
        </div>
        <div className="contact-us__detail">
          <span className="contact-us__detail-label dark:text-white">Email:</span>
          <a className="dark:text-white" href={`mailto:${details.email}`}>{details.email}</a>
        </div>
        {/* Add phone number and address if desired */}
        {details.phone && (
          <div className="contact-us__detail">
            <span className="contact-us__detail-label dark:text-white">Phone:</span>
            <a className="dark:text-white" href={`tel:${details.phone}`}>{details.phone}</a>
          </div>
        )}
        {details.address && (
          <div className="contact-us__detail">
            <span className="contact-us__detail-label dark:text-white">Address:</span>
            <span className="contact-us__detail-value dark:text-white">{details.address}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
