package com.venturedive.daraz.repository;

import com.venturedive.daraz.domain.Colors;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Colors entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ColorsRepository extends JpaRepository<Colors, Long>, JpaSpecificationExecutor<Colors> {}
