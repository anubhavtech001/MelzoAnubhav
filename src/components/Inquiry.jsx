// "use client";

// import * as React from "react";
// import { contactFormAction } from "../utils/actions";
// import { CheckCircle } from "lucide-react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { animateWithGsap } from "../utils/animations";
// const Inquiry = ({ className }) => {
//   useGSAP(() => {
//     gsap.to("#title", { opacity: 1, y: 0 , duration:1, ease: "power2.inOut",});
//     // gsap.to("#subtitle", {  opacity: 1,
//     //   y: 0,
//     //   duration: 1,
//     //   ease: "power2.inout", });
//     // animateWithGsap(".g_text", {
//     //       y: 0,
//     //       opacity: 1,
//     //       ease: "power2.inOut",
//     //       duration: 1,
//     //     });
//     // animateWithGsap(".g_fadeIn", {
//     //       opacity: 1,
//     //       y: 0,
//     //       duration: 1,
//     //       ease: "power2.inout",
//     //     });
//   }, []);

//   const [state, setState] = React.useState({
//     name: "",
//     email: "",
//     message: "",
//     success: false,
//     errors: null,
//   });
//   const [pending, setPending] = React.useState(false);

//   const formAction = async (e) => {
//     e.preventDefault();
//     setPending(true);

//     try {
//       // Assuming contactFormAction returns success and errors
//       const response = await contactFormAction(state);
//       setState({
//         ...state,
//         success: response.success,
//         errors: response.errors || null,
//       });
//     } catch (error) {
//       setState({
//         ...state,
//         success: false,
//         errors: { general: "Something went wrong. Please try again." },
//       });
//     } finally {
//       setPending(false);
//     }
//   };

//   return (
//     <section
//     className="w-screen overflow-hidden h-full common-padding bg-zinc"
//     id="inquiry"
//     >
        
//       <div className="flex min-h-svh items-center justify-center screen-max-wdith">
//         <div className={`w-full max-w-md ${className}`}>
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold mb-2 flex items-center justify-center hiw-bigtext " id="title">How can we help?</h2>
//             <p className="text-gray-600 flex items-center justify-center  " id="subtitle">
//               Need help with your 5D lab? We're here to assist you.
//             </p>
//           </div>
//           <form onSubmit={formAction}>
//             <div className="space-y-4">
//               {state.success && (
//                 <p className="text-green-600 flex items-center gap-2 text-sm">
//                   <Check className="h-4 w-4" />
//                   Your message has been sent. Thank you.
//                 </p>
//               )}

//               {state.errors?.general && (
//                 <p className="text-red-600 text-sm">{state.errors.general}</p>
//               )}

//               <div>
//                 <label htmlFor="name" className="block mb-1 text-white">
//                   Name <span aria-hidden="true">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="Lee Robinson"
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     state.errors?.name ? "border-red-500" : "border-gray-300"
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
//                   disabled={pending}
//                   value={state.name}
//                   onChange={(e) => setState({ ...state, name: e.target.value })}
//                 />
//                 {state.errors?.name && (
//                   <p className="mt-1 text-red-600 text-sm">
//                     {state.errors.name}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block mb-1 text-white">
//                   Email <span aria-hidden="true">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="leerob@acme.com"
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     state.errors?.email ? "border-red-500" : "border-gray-300"
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
//                   disabled={pending}
//                   value={state.email}
//                   onChange={(e) =>
//                     setState({ ...state, email: e.target.value })
//                   }
//                 />
//                 {state.errors?.email && (
//                   <p className="mt-1 text-red-600 text-sm">
//                     {state.errors.email}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="message" className="block mb-1 text-white">
//                   Message <span aria-hidden="true">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Type your message here..."
//                   rows={4}
//                   className={`w-full px-3 py-2 border rounded-md ${
//                     state.errors?.message ? "border-red-500" : "border-gray-300"
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
//                   disabled={pending}
//                   value={state.message}
//                   onChange={(e) =>
//                     setState({ ...state, message: e.target.value })
//                   }
//                 />
//                 {state.errors?.message && (
//                   <p className="mt-1 text-red-600 text-sm">
//                     {state.errors.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="font-medium w-full bg-white text-black py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 disabled={pending}
//               >
//                 {pending ? "Sending..." : "Send Message"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Inquiry;

