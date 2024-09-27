<script setup>
    import {ref,reactive} from 'vue';
    const newToDo = ref("");
    const listItems = reactive([
      {
        id: 1,
        text : "Learn PHP"
      },
      {
        id: 2,
        text : "Learn Javascript"
      },
      {
        id: 3,
        text : "Learn VueJS"
      },
      {
        id: 4,
        text : "Learn HTML"
      }
    ])
    const addToDo = ()=>{
      if(newToDo.value.trim()==="") return
      const todo = {
        id:  listItems.length +1,
        text: newToDo.value
      }
      listItems.push(todo);
      newToDo.value = "";
    }
    const deleteTask = (id)=>{
        listItems.splice(id,1);
    }
    // const idEdit = 0 ;
    const editTask = (id,task) =>{
      newToDo.value = task;
      // idEdit.value = id;
      var btn = document.getElementById('btn-add');
      // btn.innerText = "Edit";
      btn.style.display = "none"
      var btnEdit = document.getElementById('btn-edit');
      // btn.innerText = "Edit";
      btnEdit.style.display = "inline-block";
    }
    const editTask1 = (idEdit,newToDo)=>{
      listItems.$set(this.item, idEdit, { text: newToDo.value });
    }
</script>

<template>
      <div>
        <input type="text" v-model="newToDo" @keyup.enter="addToDo">
        <button id="btn-add" @click="addToDo">Add</button>
        <button id="btn-edit" style="display: none;" @click="editTask1">Edit</button>
        <ul>
          <li v-for="(item,id) in listItems" :key="id">
            {{ item.text }}- {{ item.id }}  
            <button @click="deleteTask(id)">Delete</button>
            <button @click="editTask(item.id,item.text)">Edit</button>
          </li>
        </ul>
        
      </div>
</template>


