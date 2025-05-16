import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FeatureCard = ({ title, description }) => {
    return (_jsxs("div", { className: "bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300", children: [_jsx("h2", { className: "text-2xl font-semibold text-blue-700 mb-2", children: title }), _jsx("p", { className: "text-gray-700", children: description })] }));
};
export default FeatureCard;
