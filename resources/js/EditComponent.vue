<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Edit A Post</h4>

                  <form @submit.prevent="updatePost">

                      <div class="form-group">
                          <label for="title">Title</label>
                          <input type="text" class="form-control" v-model="post.title">
                      </div>
                      <div class="form-group">
                          <label for="description">Description</label>
                          <textarea v-model="post.body" class="form-control" rows="5"></textarea>
                      </div>
                      <button class="btn btn-warning" >Update</button>
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
        created() {
            let uri = `http://localhost:8000/api/posts/${this.$route.params.id}/edit`;
            this.axios.get(uri).then((response) => {
                this.post = response.data;
            })
        },
        methods: {
            updatePost() {
                let uri = `http://localhost:8000/api/posts/${this.$route.params.id}`;
                this.axios.patch(uri, this.post).then((response) => {
                    this.$router.push({name: 'posts'})
                })
            }
        }
    }
</script>
