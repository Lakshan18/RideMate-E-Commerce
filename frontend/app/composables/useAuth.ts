// composables/useAuth.ts
import { ref } from "vue";
import axios from "axios";

const API_URL = "http://localhost:3001/auth";

const token = ref<string | null>(
    typeof window !== "undefined" && window.localStorage
        ? localStorage.getItem("token")
        : null
);
const user = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);

export function useAuth() {
    const login = async (email: string, password: string) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.post(`${API_URL}/login`, { email, password });
            token.value = res.data.access_token;
            localStorage.setItem("token", token.value ?? "");
            return true;
        } catch (err: any) {
            error.value = err.response?.data?.message || "Login failed";
            return false;
        } finally {
            loading.value = false;
        }
    };

    const register = async (name: string, email: string, mobile: string, password: string) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.post(`${API_URL}/register`, { name, email, mobile, password });
            token.value = res.data.access_token;
            localStorage.setItem("token", token.value ?? "");
            return true;
        } catch (err: any) {
            error.value = err.response?.data?.message || "Register failed";
            return false;
        } finally {
            loading.value = false;
        }
    };

    const logout = () => {
        token.value = null;
        user.value = null;
        localStorage.removeItem("token");
    };

    const isAuthenticated = () => !!token.value;

    return {
        token,
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated,
    };
}
