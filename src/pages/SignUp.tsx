import { AuthForm } from "@/components/auth/AuthForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const SignUp = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'signup' | 'signin'>('signup');

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/');
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            {mode === 'signup' ? 'Start your journey with us today' : 'Sign in to your account'}
          </p>
        </div>
        <AuthForm mode={mode} />
        <div className="text-center space-y-4">
          <button 
            onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            {mode === 'signup' ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
          </button>
          <div>
            <button 
              onClick={() => navigate('/')}
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;