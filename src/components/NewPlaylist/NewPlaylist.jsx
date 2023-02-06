import { useState } from "react"
import * as playlistService from '../../services/playlistService'

const NewPlaylist = (props) => {
  const [addingPlaylist, setAddingPlaylist] = useState(false) 
  const [form, setForm] = useState({
    title: '',
    recs: [props.rec]
  })

  const handleAddClick = () => {
    setAddingPlaylist(!addingPlaylist)
  }

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handlePlaylistExpand()
    playlistService.create(form)
  }

  return ( 
    <>
      <button onClick={handleAddClick}>
        {addingPlaylist ? 
          '-'
          : '+ New'
        }
      </button>
      {addingPlaylist && 
        <form onSubmit={handleSubmit}>
          <input 
            required
            type="text" 
            name="title"
            value={form.title}
            placeholder='Title'
            onChange={handleChange}
          />
          <button type="submit">Add Playlist</button>
        </form>
      }
    </>
  );
}

export default NewPlaylist;