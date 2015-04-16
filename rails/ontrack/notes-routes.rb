
# authorization vs authentication w curl HTTP verbs

# protect_from_forgery with: :null_session
# protect_from_forgery with: :exception

# curl -v localhost:3000/projects

# curl -v localhost:3000/movies -X POST \
# -H "Accept: application/json" \
# -H "Content-Type: application/json" \
# -d '{"movie": {"title": "Star Wars: A New Hope"}}'

# curl http://localhost:3000/projects/new.json
# {"name": "matrix", "desc": "the one"}

# curl -v -H "Accept: application/json" -H "Content-Type: application/json" \
# > -X POST -d '{"project": {"name": "nemo", "desc": "the butt"}}' \
# > localhost:3000/projects

# curl -v -H "Accept: application/json" -H "Content-type: application/json" -X PUT -d \
# > '{"desc": "little squishy"}' localhost:3000/projects/7.json

# curl -v localhost:3000/projects -X POST \
# --cookie cookie.txt \
# -H "Accept: application/json" \
# -H "X-CSRF-TOKEN: NF/boIFhTDUDs3UqFvqZPq36RRZEWOhB7ERphJrJL1s=" \
# -H "Content-Type: application/json" \
# -d '{"project": {"name": "twilight", "desc": "vamp thots"}}'
