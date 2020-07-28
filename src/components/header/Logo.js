import React from "react";

const Logo = ({ colour }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="280"
      height="36"
      viewBox="0 0 280 36"
    >
      <defs>
        <path id="a" d="M0 .95h16.29v27.012H0z" />
        <path id="c" d="M0 35.467h279.036V0H0v21.29z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 7.467)">
          <mask id="b" fill="#fff">
            <use href="#a" />
          </mask>
          <path
            fill={colour}
            d="M3.56 20.514c0 .855.496 1.757 1.44 2.7.948.948 1.984 1.398 3.064 1.354 1.44-.046 2.569-.45 3.425-1.307.766-.767 1.127-1.803 1.17-3.063.047-2.207-1.216-3.695-3.74-4.506l-3.017-.946c-3.154-.992-4.82-3.154-4.957-6.443-.09-1.984.588-3.695 1.984-5.092 1.44-1.396 3.154-2.16 5.18-2.252 1.758-.091 3.38.496 4.867 1.712 1.532 1.217 2.342 2.703 2.477 4.504l.046.768h-3.605v-.587c0-1.801-1.801-3.018-3.784-3.018-1.938.046-3.56 1.532-3.603 3.514-.137 1.848.99 3.154 3.287 3.919l2.974.993c3.425 1.17 5.27 3.468 5.497 6.847.18 2.299-.631 4.325-2.434 6.037-1.8 1.667-3.873 2.433-6.217 2.299-2.162-.136-3.965-1.037-5.452-2.614C.72 23.755 0 21.863 0 19.658h3.56v.856z"
            mask="url(#b)"
          />
        </g>
        <path
          fill={colour}
          d="M45.866 27.934c-2.704 5.001-6.893 7.435-12.525 7.389-3.74-.045-6.938-1.352-9.642-3.92-2.704-2.566-4.056-5.722-4.1-9.416-.045-3.741 1.261-6.893 3.965-9.552 2.748-2.658 5.991-4.053 9.777-4.101 2.702-.044 5.225.677 7.568 2.12 2.207 1.396 3.83 3.107 4.776 5.225l.496 1.126h-3.875c-1.937-3.288-4.865-4.999-8.83-5.09-2.66-.046-5 .899-7.119 2.883-2.207 2.028-3.289 4.46-3.289 7.253 0 2.796 1.036 5.182 3.063 7.211 2.027 1.981 4.461 2.972 7.256 2.928 4.008-.046 6.982-1.667 8.963-4.821h3.875l-.359.765zM72.513 34.738H69.09V19.78c0-2.163-.812-4.011-2.388-5.587-1.577-1.58-3.469-2.343-5.587-2.3-2.162.049-4.01.769-5.497 2.209-1.487 1.397-2.208 3.2-2.208 5.407v15.229h-3.557V0h3.468v12.705c1.938-2.57 4.46-3.92 7.524-4.056 3.198-.133 5.902.9 8.2 3.155 2.298 2.253 3.47 5.046 3.47 8.335v14.598zM112.748 34.738h-3.56v-15.77c0-1.982-.586-3.693-1.71-5.091-1.128-1.395-2.659-2.118-4.507-2.118-1.892 0-3.514.63-4.912 1.848-1.352 1.215-2.027 2.748-2.027 4.596v16.535h-3.605V18.203c0-1.848-.675-3.381-2.073-4.596-1.349-1.217-2.973-1.848-4.863-1.848-1.848 0-3.335.723-4.463 2.118-1.126 1.398-1.666 3.066-1.666 5.092v15.769h-3.559V19.374c0-3.2.901-5.812 2.748-7.748 1.713-1.848 3.966-2.885 6.757-3.11 3.74-.315 6.714 1.305 8.922 4.776 2.207-3.471 5.181-5.091 8.921-4.775 2.793.224 5.045 1.26 6.804 3.109 1.846 1.936 2.793 4.548 2.793 7.748v15.364z"
        />
        <mask id="d" fill="#fff">
          <use href="#c" />
        </mask>
        <path
          fill={colour}
          d="M116.133 34.738h3.379V9.057h-3.379v25.681zm0-28.744h3.379V.003h-3.379v5.991zM146.187 19.914c-.496-2.388-1.622-4.324-3.377-5.812-1.759-1.487-3.875-2.252-6.354-2.297-2.478-.046-4.642.72-6.488 2.207-1.846 1.487-2.974 3.47-3.468 5.902h19.687zm2.75 6.399c-.947 2.749-2.569 4.957-4.866 6.577-2.299 1.623-4.822 2.434-7.615 2.48-3.514.043-6.623-1.218-9.325-3.832-2.704-2.657-4.1-5.767-4.147-9.416-.089-3.83 1.263-7.163 4.056-9.913 2.838-2.793 6.126-4.1 9.958-3.875 3.422.227 6.396 1.624 8.92 4.237 2.433 2.567 3.648 5.45 3.648 8.649v1.849H126.5c.27 2.568 1.35 4.728 3.288 6.396 1.937 1.667 4.19 2.526 6.803 2.48 4.055-.046 6.94-1.938 8.695-5.632h3.651zM165.758 32.078c2.84.136 5.228-.81 7.212-2.929 2.025-2.116 2.971-4.55 2.883-7.387-.044-2.704-1.036-5.002-2.883-6.939-1.85-1.938-4.054-2.883-6.713-2.883-2.703-.045-5.049.946-6.983 2.883-1.94 1.938-2.886 4.235-2.93 6.985-.046 2.704.857 5.088 2.703 7.119 1.846 2.026 4.055 3.061 6.712 3.151zm13.563-10.045c.091 3.692-1.215 6.893-3.964 9.596-2.746 2.656-5.947 3.965-9.642 3.829-3.56-.09-6.623-1.44-9.102-4.054-2.476-2.613-3.692-5.721-3.692-9.328 0-3.74 1.352-6.984 4.008-9.642 2.657-2.701 5.86-4.007 9.553-3.872 3.784.133 6.938 1.667 9.46 4.548V.181h3.38v21.851zM205.967 19.914c-.496-2.388-1.622-4.324-3.379-5.812-1.757-1.487-3.873-2.252-6.352-2.297-2.48-.046-4.642.72-6.488 2.207-1.848 1.487-2.974 3.47-3.468 5.902h19.687zm2.748 6.399c-.945 2.749-2.567 4.957-4.864 6.577-2.299 1.623-4.822 2.434-7.615 2.48-3.516.043-6.625-1.218-9.325-3.832-2.706-2.657-4.1-5.767-4.147-9.416-.09-3.83 1.263-7.163 4.056-9.913 2.838-2.793 6.126-4.1 9.956-3.875 3.424.227 6.398 1.624 8.92 4.237 2.435 2.567 3.65 5.45 3.65 8.649v1.849H186.28c.268 2.568 1.348 4.728 3.288 6.396 1.937 1.667 4.188 2.526 6.802 2.48 4.056-.046 6.94-1.938 8.694-5.632h3.651z"
          mask="url(#d)"
        />
        <path
          fill="#DF1720"
          d="M216.652 31.828a3.612 3.612 0 0 0 3.612 3.613h55.158a3.612 3.612 0 0 0 3.614-3.614V12.63a3.612 3.612 0 0 0-3.614-3.612h-55.158a3.612 3.612 0 0 0-3.612 3.612v19.198z"
          mask="url(#d)"
        />
        <path
          fill="#FEFEFE"
          d="M228.861 28.955c1.888.09 3.478-.54 4.797-1.949 1.35-1.41 1.979-3.03 1.951-4.917-.061-1.803-.721-3.33-1.951-4.62-1.231-1.29-2.698-1.919-4.44-1.919-1.827-.029-3.356.63-4.647 1.918-1.289 1.291-1.918 2.818-1.947 4.65-.033 1.8.538 3.39 1.766 4.737 1.231 1.35 2.7 2.04 4.471 2.1m6.326-.3c-1.77 1.768-3.898 2.64-6.356 2.55-2.369-.062-4.41-.96-6.059-2.699-1.648-1.739-2.458-3.81-2.458-6.21 0-2.489.901-4.647 2.667-6.417 1.771-1.799 3.901-2.668 6.359-2.579 2.369.09 4.408.99 6.058 2.76 1.651 1.74 2.489 3.808 2.489 6.206 0 2.46-.901 4.59-2.7 6.388M255.28 30.814h-2.31v-9.986c0-1.44-.538-2.668-1.587-3.718-1.052-1.051-2.25-1.56-3.661-1.56-1.41 0-2.668.509-3.72 1.56-1.047 1.05-1.556 2.278-1.556 3.718v9.986h-2.311v-9.747c0-2.22.72-4.048 2.16-5.516 1.44-1.471 3.239-2.218 5.427-2.218 2.16 0 3.959.747 5.398 2.218 1.439 1.468 2.16 3.297 2.16 5.516v9.747zM273.125 20.948c-.331-1.589-1.08-2.88-2.251-3.869-1.168-.99-2.578-1.499-4.228-1.529-1.648-.028-3.087.48-4.317 1.47s-1.981 2.308-2.31 3.928h13.106zm1.829 4.257c-.63 1.83-1.711 3.301-3.238 4.38a8.825 8.825 0 0 1-5.07 1.648c-2.337.031-4.41-.81-6.208-2.55-1.798-1.766-2.728-3.837-2.758-6.267-.06-2.548.839-4.767 2.7-6.596 1.888-1.859 4.076-2.73 6.627-2.58 2.277.15 4.257 1.082 5.937 2.82 1.62 1.71 2.43 3.63 2.43 5.758v1.23H260.02c.18 1.71.9 3.15 2.19 4.257 1.289 1.11 2.789 1.681 4.529 1.65 2.699-.03 4.616-1.29 5.788-3.75h2.428z"
          mask="url(#d)"
        />
      </g>
    </svg>
  );
};

export default Logo;
