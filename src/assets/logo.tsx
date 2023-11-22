const Logo = ({ width = "48", height = "48" }) => {
  return (
    <svg
      height={`${height}px`}
      viewBox={`0 0 48 48`}
      width={`${width}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bookshelf</title>
      <g>
        <path
          d="M12,5H2C1.44772,5,1,5.44772,1,6v27h12V6C13,5.44772,12.55229,5,12,5z"
          fill="#E86C60"
        />
        <path
          d="M12,43H2c-0.55228,0-1-0.44772-1-1V32h12v10C13,42.55228,12.55229,43,12,43z"
          fill="#444444"
        />
        <path
          d="M8,23H6c-0.55228,0-1-0.44772-1-1V11c0-0.55229,0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1v11 C9,22.55228,8.55229,23,8,23z"
          fill="#FFFFFF"
        />
        <path
          d="M35.44301,3.67613l-9.68988,2.47109c-0.53516,0.13647-0.85835,0.68094-0.72188,1.2161l6.67194,26.16267 l11.62785-2.96531L36.6591,4.398C36.52263,3.86285,35.97816,3.53965,35.44301,3.67613z"
          fill="#43A6DD"
        />
        <path
          d="M44.83315,40.49766l-9.68988,2.47109c-0.53516,0.13647-1.07962-0.18672-1.21609-0.72188l-2.47109-9.68988 l11.62785-2.96531l2.47109,9.68987C45.69151,39.81672,45.36831,40.36118,44.83315,40.49766z"
          fill="#444444"
        />
        <path
          d="M36.01502,22.10634l-1.93797,0.49422c-0.53516,0.13647-1.07962-0.18672-1.2161-0.72188l-2.7182-10.65886 c-0.13647-0.53516,0.18672-1.07962,0.72188-1.2161L32.8026,9.5095c0.53516-0.13647,1.07962,0.18672,1.2161,0.72188l2.7182,10.65886 C36.87337,21.4254,36.55017,21.96987,36.01502,22.10634z"
          fill="#FFFFFF"
        />
        <path
          d="M24,5H14c-0.55229,0-1,0.44772-1,1v27h12V6C25,5.44772,24.55228,5,24,5z"
          fill="#E6E6E6"
        />
        <path
          d="M24,43H14c-0.55229,0-1-0.44772-1-1V32h12v10C25,42.55228,24.55228,43,24,43z"
          fill="#B3B3B3"
        />
        <path
          d="M20,23h-2c-0.55228,0-1-0.44772-1-1V11c0-0.55229,0.44772-1,1-1h2c0.55228,0,1,0.44771,1,1v11 C21,22.55228,20.55228,23,20,23z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export { Logo };
