import React from 'react';
import Search, { Unwrapped as UnwrappedSearch } from '../js/Search';
import { shallow,render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../js/store';
import ShowCard from '../js/ShowCards';
import preload from '../data.json';
import { setSearchTerm } from '../js/actionCreators';

test('Search renders correctly', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term without redux', () => {
    const SearchWord = 'black';
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={SearchWord} />);
    // component.find('input').simulate('change', { target: { value: SearchWord } });
    const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(SearchWord.toUpperCase()) > -1).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
});

// here we try to simulate the user interactions using redux
test('Search should render correct amount of shows based on search term with redux', () => {
    const SearchWord = 'black';
    store.dispatch(setSearchTerm(SearchWord))
    const component = render(
        <Provider store={store}>
            <MemoryRouter>
                <Search shows={preload.shows} searchTerm={SearchWord} />
            </MemoryRouter>
        </Provider>
    );
    const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(SearchWord.toUpperCase()) > -1).length;
    expect(component.find(`.show-card`).length).toEqual(showCount);
});