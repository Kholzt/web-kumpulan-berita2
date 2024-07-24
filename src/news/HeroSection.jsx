import React from "react";

const HeroSection = ({
  search,
  setSearch,
  source,
  setSource,
  handleSearch,
}) => (
  <section className="hero-section flex-column">
    <div className="hero-content container flex-column d-flex justify-content-between align-items-center">
      <h1 className="text-white fw-bold">Knowledge</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        exercitationem, earum quis repudiandae odit iure pariatur. Corporis eum
        porro esse?
      </p>
      <form
        onSubmit={handleSearch}
        className="bg-white p-2 hero-search d-flex gap-2 rounded flex-md-nowrap flex-wrap"
      >
        <div className="d-flex align-items-center w-100">
          <i className="fa fa-search"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.trim())}
            type="text"
            placeholder="Explore News"
            className="rounded-0 form-control border-0 shadow-none"
          />
        </div>
        <span className="border-start border-gray"></span>
        <div className="d-flex align-items-center hero-source">
          <i className="fa-solid fa-globe"></i>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value.trim())}
            name="source"
            className="form-control border-0 shadow-none"
          >
            <option value="all">All</option>
            <option value="cnn">CNN INDONESIA</option>
            <option value="bss">BSS</option>
          </select>
        </div>
        <button className="btn btn-primary rounded" type="submit">
          Search
        </button>
      </form>
    </div>
  </section>
);

export default HeroSection;
