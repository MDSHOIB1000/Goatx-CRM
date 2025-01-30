import React from 'react'

function LoginForm({ handleLogin, email, setEmail, password, setPassword, error, setForgotPasswordUi }) {
    return (
        <>
            <form>
                <div
                    className="space-y-6  border-white-600 p-5 rounded-tl-2xl rounded-br-2xl border border-white z-10"
                    style={{
                        backgroundColor: "rgba(250, 250, 250, 0.4)",
                    }}
                >
                    <div className="border-b border-gray-900/10">
                        <h2 className="text-base/7 font-semibold text-gray-900 uppercase">
                            Welcome Back Goatx CRM
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 uppercase">
                            <i>Sign in to continue to Goatx WanderLust.</i>
                        </p>

                        <div className="mt-5 grid grid-cols-1   sm:grid-cols-6">
                            <div className="sm:col-span-12">
                                <label
                                    htmlFor="email"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-transparent border-2 border-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-12">
                                <div className="flex align-middle justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <span className="text-sm" onClick={(() => setForgotPasswordUi(true))}>
                                        <small>
                                            <i>Forgot password</i>
                                        </small>
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-transparent px-3 border-2 border-white py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 tracking-[6px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {error ? (
                        <div className="text-red-500 text-sm  text-center">
                            {error}
                        </div>
                    ) : (
                        <div className="text-center">
                            {/* <small className='text-yellow-400 text-xs bg-blue-600 px-3 py-1 rounded-xl'>Login Success</small> */}
                        </div>
                    )}

                    <div className="text-center">
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-0"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm
