import { Recipe} from './recipe.model';

describe('Recipe.Model', () => {
  it('should create an instance', () => {
    expect(new Recipe()).toBeTruthy();
  });
});
