class Hangout {
  constructor({ id, ownerName, title, description, createdAt }) {
    this.id = id
    this.ownerName = ownerName
    this.title = title
    this.description = description
    this.createdAt = createdAt
  }
}

module.exports = Hangout
