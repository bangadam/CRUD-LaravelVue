<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <router-link :to="{name: 'create'}" class="btn btn-primary">Create Post</router-link>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Posts Collection </h4>
                  <table class="table table-hover">
                      <thead>
                      <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Body</th>
                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="post in posts" :key="post.id">
                          <td>{{post.id}}</td>
                          <td>{{post.title}}</td>
                          <td>{{post.body}}</td>
                          <td>
                              <router-link :to="{name: 'edit', params: {id: post.id}}" class="btn btn-warning">Edit</router-link>
                              <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            let uri = 'http://localhost:8000/api/posts';
            this.axios.get(uri).then((response) => {
                this.posts = response.data.data;
            });
        },
        methods: {
            deletePost(id) {
                let uri = `http://localhost:8000/api/posts/${id}`;
                this.axios.delete(uri).then((response) => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                })
            }
        }
    }
</script>
