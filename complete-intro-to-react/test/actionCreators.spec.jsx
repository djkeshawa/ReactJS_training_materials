import moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../js/actionCreators';

const blackMirror = {
    "title": "Black Mirror",
    "year": "2011–",
    "description": "A television anthology series that shows the dark side of life and technology.",
    "poster": "bm.jpg",
    "imdbID": "tt2085059",
    "trailer": "jDiYGjp5iFg"
};

test('setSearchTerm', () => {
    expect(setSearchTerm('new york')).toMatchSnapshot();
});

test('addAPIData', () => {
    expect(addAPIData(blackMirror)).toMatchSnapshot();
});
test('getAPIDetails', (done) => {
    // here what we teting is, if we are call black mirror, we going to pass a dispatch function and check 
    // whether it called with the correct parameters. 
    // here the done parameter if somthing provided by the jest, so it can propperly execute asyc functions (not to execute and finish the test
    // before it do it's tesing)
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
        getAPIDetails(blackMirror.imdbID)(dispatchMock);
        moxios.wait(() => {
            // here we check whether we called the api with correct url,here we inspect with given by moxios
            const request = moxios.requests.mostRecent();
            request
            .respondWith({
                status:200,
                response:blackMirror
            }).then(()=>{
                expect(request.url).toEqual(`http://localhost:3000/${blackMirror.imdbID}`)
                expect(dispatchMock).toBeCalledWith(addAPIData(blackMirror));// toBeCalledWith with is similar to signOn function 
                // we need to call done() to let it know we are finished
                done();
            });

        });
    });
});