// import React, { useState } from 'react';
// import './Contact.css';
// import { database } from './firebase';
// import { ref, set } from 'firebase/database';

// function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false); // NEW

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const userId = Date.now();

//     set(ref(database, 'contacts/' + userId), {
//       name,
//       email,
//       message,
//     })
//       .then(() => {
//         setSuccess(true); // show thank you message
//         setName('');
//         setEmail('');
//         setMessage('');
//       })
//       .catch((error) => {
//         console.error('Error writing to database:', error);
//         alert('Failed to send message.');
//       });
//   };

//   return (
//     <section className="contact-section">
//       <h2>Contact Me</h2>

//       {success && (
//         <p className="thank-you-message">✅ Thanks for reaching out! I’ll get back to you soon.</p>
//       )}

//       <form className="contact-form" >
//         <input
//           type="text"
//           placeholder="Your Name"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <textarea
//           placeholder="Your Message"
//           rows="5"
//           required
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="button" onClick={handleSubmit}>Send</button>

//       </form>
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import './Contact.css';
import { database, auth } from './firebase';
import { ref, push } from 'firebase/database';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ wait for user to be signed in
    // const user = auth.currentUser;
    // if (!user) {
    //   alert("Still signing in... please try again.");
    //   return;
    // }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

    // ✅ use push() for unique IDs
    const contactRef = ref(database, 'contacts');
    push(contactRef, {
      owner: user.uid,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error writing to database:', error);
        alert('Failed to send message.');
      });
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      {success && (
        <p className="thank-you-message">
          ✅ Thanks for reaching out! I’ll get back to you soon.
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;


