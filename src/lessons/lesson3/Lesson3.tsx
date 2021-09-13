import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<any>('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<any[]>([]);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(data => {
                setSerachResult(data.data)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(data => {
                setSerachResultByType(data.data.Search)
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                {serachResult.Error && <h2 style={{color: 'red'}}>{serachResult.Error}</h2>}
                {serachResult.Actors && <ul className={`aboutMovieList`} style={{position: 'relative'}}>
                        <li><b>Actors:</b> {serachResult.Actors}</li>
                        <li><b>Awards:</b> {serachResult.Awards}</li>
                        <li><b>Box Office:</b> {serachResult.BoxOffice}</li>
                        <li><b>Country:</b> {serachResult.Country}</li>
                        <li><b>DVD:</b> {serachResult.DVD}</li>
                        <li><b>Director:</b> {serachResult.Director}</li>
                        <li><b>Genre:</b> {serachResult.Genre}</li>
                        <li><b>Language:</b> {serachResult.Language}</li>
                        <li><b>Metascore:</b> {serachResult.Metascore}</li>
                        <li><b>Plot:</b> {serachResult.Plot}</li>
                        <li><b>Poster:</b> <img style={{
                            position: 'absolute',
                            width: '200px',
                            right: 0,
                            top: 0,
                        }}
                                               src={serachResult.Poster}
                                               alt="Poster"/></li>
                        <li><b>Production:</b> {serachResult.Production}</li>
                        <li><b>Rated:</b> {serachResult.Rated}</li>
                        <li><b>Ratings:</b> {serachResult.Ratings
                            .map((m: any, i: number) => {
                                return <p key={i}> {m.Source} <b><i> {m.Value}</i></b></p>
                            })}
                        </li>
                        <li><b>Released:</b> {serachResult.Released}</li>
                        <li><b>Response:</b> {serachResult.Response}</li>
                        <li><b>Runtime:</b> {serachResult.Runtime}</li>
                        <li><b>Title:</b> {serachResult.Title}</li>
                        <li><b>Type:</b> {serachResult.Type}</li>
                        <li><b>Website:</b> {serachResult.Website}</li>
                        <li><b>Writer:</b> {serachResult.Writer}</li>
                        <li><b>Year:</b> {serachResult.Year}</li>
                        <li><b>imdbID:</b> {serachResult.imdbID}</li>
                        <li><b>imdbVotes:</b> {serachResult.imdbVotes}</li>
                    </ul>}
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    {!serachResultByType
                        ? <h2 style={{color: 'red'}}>There is nothing to show!</h2>
                        : serachResultByType.map(m => {
                        return (
                            <div key={m.imdbID + Math.random()} style={{maxWidth: '150px', padding: '10px'}}>
                                <img style={{maxWidth: '100%'}} src={m.Poster} alt={m.Title}/>
                                <h5 style={{color: 'darkred'}}>{m.Title}</h5>
                                <span><b>Year:</b> <i>{m.Year}</i></span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;