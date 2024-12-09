import { CocktailsList } from '../components/CocktailsList';
import { SearchBar } from '../components/SearchBar';

export default function HomePage() {
  return (
    <div className="">
      <SearchBar />
      <CocktailsList></CocktailsList>
    </div>
  );
}
