import React,{useState} from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFUrl} = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL= form.imageURL.value;
    const category= form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFUrl=form.bookPDFUrl.value;
    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFUrl
    }
    //update book data 
    fetch(`http://localhost:5001/book/${id}`,{
       method: "PATCH",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book is updated successfully!!")
    })
    
  }
  return (
    <div className="px-4 my-12">
    <h2 className="mb-8 text-3xl font-bold">
      Update the book data
    </h2>
    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
    <div className="flex gap-8">
    <div className="lg:w-2/5">
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle} required />
      </div>
      <div className="lg:w-2/5">
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
      </div>
    </div>
    {/* 2nd row */}
      <div className="flex gap-8">
      <div className="lg:w-2/5">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book image URL" defaultValue={imageURL} required />
      </div>
      {/* Category */}
      <div className="lg:w-2/5">
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue} >
        {
          bookCategories.map( (option) => <option key={option} value={option} > {option} </option>)
        }

        </Select>
      </div>
      </div>
      {/* 3rd row */}
     <div className="lg:w-4/5">
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." required 
        className="w-full" rows={6} defaultValue={bookDescription} />
      </div>
     <div className="lg:w-4/5">
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFUrl" name="bookPDFURL" type="text" placeholder="Book PDF URL" defaultValue={bookPDFUrl} required/>
      </div>
       <div>
       </div> 
      <Button type="submit" className="bg-blue-500 hover:bg-blue-700 lg:w-4/5">Update Book</Button>

    </form>
    </div>

    
  )
}

export default EditBooks