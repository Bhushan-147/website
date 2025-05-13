// import { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Email: ${email}, Password: ${password}`);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-12 p-6 rounded-lg bg-gradient-to-br from-white via-pink-50 to-indigo-50 shadow-2xl">
//       <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition-colors duration-300" type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
