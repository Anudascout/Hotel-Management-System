import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/login', formData)
            alert(res.data.message)
        } catch (err) {
            alert(err.response?.data?.error || 'Login failed')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400">
            {/* Main Card */}
            <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl transform transition-all hover:shadow-3xl">
                {/* Logo/Header Section */}
                <div className="mb-10 text-center">
                     
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-gray-600">Please sign in to continue</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                placeholder="name@example.com"
                                required
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                placeholder="••••••••"
                                required
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-500
                         text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 
                         transition-all transform hover:scale-[1.01]">
                        Sign In
                    </button>

                    {/* Footer Links */}
                    <div className="mt-6 text-center">
                        <Link to="/register" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                            Create new account
                        </Link>
                        <span className="mx-2 text-gray-400">|</span>
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login