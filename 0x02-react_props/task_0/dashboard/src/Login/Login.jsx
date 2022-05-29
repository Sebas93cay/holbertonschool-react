export const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' />
      <label htmlFor='password'>Password</label>
      <input type='text' name='password' />
      <button>OK</button>
    </>
  );
};
