export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">Courriel</label>
        <input id="email" name="email" type="email" placeholder="Courriel" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input id="password" name="password" type="Mot de passe" />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}
