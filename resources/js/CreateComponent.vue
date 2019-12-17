<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create A Post</h4>

                  <form @submit.prevent="addPost">

                      <div class="form-group">
                          <label for="title">Title</label>
                          <input type="text" class="form-control" v-model="post.title">
                      </div>
                      <div class="form-group">
                          <label for="description">Description</label>
                          <textarea v-model="post.body" class="form-control" rows="5"></textarea>
                      </div>
                      <button class="btn btn-primary" >Create</button>
                  </form>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post:{}
            }
        },
        methods: {
            addPost() {
                let uri = "http://localhost:8000/api/posts";
                this.axios.post(uri, this.post).then((response) => {
                    this.$router.push({name: 'posts'})
                })
            }
        }
    }
</script>
